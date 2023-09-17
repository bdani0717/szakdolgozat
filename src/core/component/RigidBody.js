import { Vector } from "../utils/Vector.js";
import { Body } from "./Body.js";
import Serializer from "esserializer";
import { StaticBody } from "./StaticBody.js";
import { EntitySystem } from "../EntitySystem.js";
import { getBroadPhaseArea, sweptAABB } from "../physics/Collision.js";
import { GetFrameTime } from "../Function.js";

export class RigidBody extends Body {
    static TYPE = "rigidbody";

    constructor(transform, velocity, restitution, mass) {
        super(RigidBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
        this.restitution = restitution;
        this.mass = mass;
        this.useGravity = true;
        this.useFriction = true;
    }

    applyForce(force) {
        const acceleration = Vector.divide(force, this.mass);
        this.velocity = Vector.add(this.velocity, acceleration);
    }

    updatePosition() {
        this.transform.move(this.velocity.x, this.velocity.y);
    }

    checkCollisions() {
        const breadPhaseArea = getBroadPhaseArea(this.transform, Vector.scale(this.velocity, GetFrameTime()));
        const entities = EntitySystem.getEntitiesInArea(breadPhaseArea);
        for (const [ , entity ] of [ ...entities ]) {
            const other = entity.getComponent(StaticBody);
            if (other) {
                const collision = sweptAABB(
                    this.transform, 
                    Vector.scale(this.velocity, GetFrameTime()), 
                    other.transform, 
                    Vector.scale(other.velocity, GetFrameTime()),
                );
            
                if (collision.time >= 1) {
                    return false;
                }
                
                this.resolveCollision(other, collision.normal);
                return true;
            }
        }

    }

    resolveCollision(other, normal) {
        const relativeVelocity = Vector.subtract(this.velocity, other.velocity);
        const velocityAlongNormal = Vector.dot(relativeVelocity, normal);
    
        if (velocityAlongNormal > 0) {
        // They are moving apart
            return;
        }
    
        const e = Math.min((this.restitution || 0), (other.restitution || 0));
        // const e = this.restitution;
        let j = -(1 + e) * velocityAlongNormal;
        j /= 1 / this.mass + 1 / other.mass;
        const impulse = Vector.scale(normal, j);

        this.applyForce(impulse);
        other.applyForce(Vector.scale(impulse, -1));

        const offset = 0.01;
        if (normal.x === 1) {
            this.transform.x = other.transform.x + other.transform.width + offset;
            this.velocity.x = 0;
        } else if (normal.x === -1) {
            this.transform.x = other.transform.x - this.transform.width - offset;
            this.velocity.x = 0;
        }
        if (normal.y === 1) {
            this.transform.y = other.transform.y + other.transform.height + offset;
            this.velocity.y = 0;
        } else if (normal.y === -1) {
            this.transform.y = other.transform.y - this.transform.height - offset;
            this.velocity.y = 0;
        }
    }
}  

Serializer.registerClass(RigidBody);