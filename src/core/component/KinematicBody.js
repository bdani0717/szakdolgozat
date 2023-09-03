import { Body } from "./Body.js";

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

    resolveCollision(other, normal) {
        const offset = 0.001;

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