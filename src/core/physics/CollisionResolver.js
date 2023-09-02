import { GetFrameTime } from "../Function.js";
import { AreaBody } from "../component/AreaBody.js";
import { KinematicBody } from "../component/KinematicBody.js";
import { ProjectalBody } from "../component/ProjectalBody.js";
import { RigidBody } from "../component/RigidBody.js";
import { StaticBody } from "../component/StaticBody.js";
import { Vector } from "../utils/Vector.js";
import { checkAABB, getBroadPhaseArea, sweptAABB } from "./Collision.js";

export class CollisionResolver {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    resolve() {
        const scaledVelA = Vector.scale(this.a.velocity, GetFrameTime());
        const scaledVelB = Vector.scale(this.b.velocity, GetFrameTime());
        const broadPhaseA = getBroadPhaseArea(this.a.transform, scaledVelA);
        const broadPhaseB = getBroadPhaseArea(this.b.transform, scaledVelB);

        if (checkAABB(broadPhaseA, broadPhaseB)) {
            const collision = sweptAABB(this.a.transform, scaledVelA, this.b.transform, scaledVelB);
            
            if (collision >= 1) {
                return false;
            }

            this.normal = collision.normal;
            this.force = {x: 0, y: 0};
            
            switch (this.a.type) {
            case AreaBody.TYPE:
                break;
            case RigidBody.TYPE:
                this.#applyFriction();
                this.a.resolveCollision(this.b, this.normal);
                break;
            case ProjectalBody.TYPE:
                break;
            case StaticBody.TYPE:
                break;
            case KinematicBody.TYPE:
                break;
            }

            return collision.time < 1;
        }
    }

    #applyFriction() {
        if (this.b.friction === 0) {
            return;
        }

        const tangentVector = {
            x: -this.normal.y,
            y: this.normal.x,
        };
        const velocityAlongTangent = this.a.velocity.x * tangentVector.x + this.a.velocity.y * tangentVector.y;
        const impulse = -this.b.friction * velocityAlongTangent;
        const frictionV = Vector.scale(tangentVector, impulse);
        
        this.a.applyForce(frictionV);
    }
}

