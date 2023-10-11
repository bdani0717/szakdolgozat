import { GetFrameTime } from "../Function.js";
import { Vector } from "../utils/Vector.js";
import { checkAABB, getBroadPhaseArea, sweptAABB } from "./Collision.js";

export class CollisionResolver {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    resolve() {
        const a = this.a.body;
        const b = this.b.body;
        const scaledVelA = Vector.scale(a.velocity, GetFrameTime());
        const scaledVelB = Vector.scale(b.velocity, GetFrameTime());
        const broadPhaseA = getBroadPhaseArea(a.transform, scaledVelA);
        const broadPhaseB = getBroadPhaseArea(b.transform, scaledVelB);

        if (checkAABB(broadPhaseA, broadPhaseB)) {
            const collision = sweptAABB(a.transform, scaledVelA, b.transform, scaledVelB);
            
            if (collision.time >= 1) {
                return {
                    collision: false,
                    normal: {x: 0, y: 0},
                };
            }

            this.normal = collision.normal;
            this.force = {x: 0, y: 0};

            if (a.useFriction) {
                this.#applyFriction();
            }
            
            a.resolveCollision(this.b, this.normal);

            return {
                collision: collision.time < 1,
                normal: this.normal,
            };
        }

        return {
            collision: false,
            normal: {x: 0, y: 0},
        };
    }

    #applyFriction() {
        const a = this.a.body;
        const b = this.b.body;
        if (this.b.friction === 0) {
            return;
        }

        const tangentVector = {
            x: -this.normal.y,
            y: this.normal.x,
        };

        const velocityAlongTangent = Vector.dot(a.velocity, tangentVector);
        const impulse = -b.friction * velocityAlongTangent;
        const frictionV = Vector.scale(tangentVector, impulse);
        
        a.applyForce(Vector.scale(frictionV, GetFrameTime()));
    }
}

