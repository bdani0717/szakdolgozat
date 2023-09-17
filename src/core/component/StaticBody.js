import { Vector } from "../utils/Vector.js";
import { Body } from "./Body.js";
import Serializer from "esserializer";

export class StaticBody extends Body {
    static TYPE = "staticbody";

    constructor(transform, friction = 0) {
        super(StaticBody.TYPE, friction);
        
        this.transform = transform;
        this.mass = Infinity;
    }

    resolveCollision(other, normal) {
        const relativeVelocity = Vector.subtract(this.velocity, other.velocity);
        const velocityAlongNormal = Vector.dot(relativeVelocity, normal);
    
        if (velocityAlongNormal > 0) {
        // They are moving apart
            return;
        }
    
        // const e = Math.min((this.restitution || 0), (this.restitution || 0));
        const e = this.restitution;
        let j = -(1 + e) * velocityAlongNormal;
        j /= 1 / this.mass + 1 / other.mass;
        const impulse = Vector.scale(normal, j);

        this.applyForce(impulse);
        other.applyForce(Vector.scale(impulse, -1));
    }
}    

Serializer.registerClass(StaticBody);