import { Body } from "./Body.js";

export class RigidBody extends Body {
    static TYPE = "rigidbody";

    constructor(transform, velocity, restitution, mass) {
        super(RigidBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
        this.restitution = restitution;
        this.mass = mass;
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
}    