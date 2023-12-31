import { Vector } from "../utils/Vector.js";
import { Body } from "./Body.js";
import { RigidBody } from "./RigidBody.js";
import Serializer from "esserializer";

export class KinematicBody extends Body {
    static TYPE = "kinematicbody";

    constructor(transform, velocity, restitution, mass, useGravity = false, useFriction = false) {
        super(KinematicBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
        this.restitution = restitution;
        this.mass = mass;
        this.useGravity = useGravity;
        this.useFriction = useFriction;
    }

    applyForce(force) {
        const acceleration = Vector.divide(force, this.mass);
        this.velocity = Vector.add(this.velocity, acceleration);
    }

    resolveCollision(other, normal) {
        const offset = 0.01;

        if (other.body.type === RigidBody.TYPE) {       
            const impulseOther = Vector.scale(other.body.velocity, other.body.mass);
            const impulse = Vector.scale(this.velocity, other.body.mass);
            let force = Vector.add(Vector.scale(impulseOther, -1), impulse);
            force.x *= normal.x !== 0;
            force.y *= normal.y !== 0;
            other.body.applyForce(force);
            return;
        }

        if (normal.x === 1) {
            this.transform.x = other.body.transform.x + other.body.transform.width + offset;
            this.velocity.x = 0;
        } else if (normal.x === -1) {
            this.transform.x = other.body.transform.x - this.transform.width - offset;
            this.velocity.x = 0;
        }
        if (normal.y === 1) {
            this.transform.y = other.body.transform.y + other.body.transform.height + offset;
            this.velocity.y = 0;
        } else if (normal.y === -1) {
            this.transform.y = other.body.transform.y - this.transform.height - offset;
            this.velocity.y = 0;
        }
    }
}    

Serializer.registerClass(KinematicBody);