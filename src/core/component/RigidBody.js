import { Vector } from "../utils/Vector.js";
import { Body } from "./Body.js";
import { KinematicBody } from "./KinematicBody.js";

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
        const acceleration = {
            x: force.x / this.mass,
            y: force.y / this.mass,
        };
        this.velocity.x += acceleration.x;
        this.velocity.y += acceleration.y;
    }

    updatePosition() {
        this.transform.move(this.velocity.x, this.velocity.y);
    }

    resolveCollision(other, normal) {
        const relativeVelocity = Vector.subtract(this.velocity, other.velocity);
        const velocityAlongNormal = Vector.dot(relativeVelocity, normal);
    
        if (velocityAlongNormal > 0) {
        // They are moving apart
            return;
        }
    
        const e = Math.min((this.restitution || 0), (this.restitution || 0));
        let j = -(1 + e) * velocityAlongNormal;
        j /= (1 / this.mass) + ((1 / other.mass) || 0);
        const impulse = Vector.scale(normal, j);

        this.velocity = Vector.add(this.velocity, Vector.scale(impulse, 1 / this.mass));

        if (other.type === RigidBody.TYPE) {
            other.velocity = Vector.subtract(other.velocity, Vector.scale(impulse, 1 / other.mass));
        }

        if (other.type === KinematicBody.TYPE) {
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
}    