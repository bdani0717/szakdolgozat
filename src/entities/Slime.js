import { Entity } from "../core/entity/Entity.js";
import { Render } from "../core/component/Render.js";
import { Transform } from "../core/component/Transform.js";
import { RigidBody } from "../core/component/RigidBody.js";
import { Update } from "../core/component/Update.js";
import { DrawRectangleLinesEx, DrawRectangleV } from "../core/Function.js";
import { BLUE, RED } from "../core/Enums.js";
import { KinematicBody } from "../core/component/KinematicBody.js";

export class Slime extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 48, 48));
        this.addComponent(new SlimeRender(this));
        this.addComponent(new KinematicBody(this.getComponent(Transform), {x: 0, y: 0}, 0.3, 10));
        // this.addComponent(new RigidBody(this.getComponent(Transform), {x: GetRandomValue(-30, 30), y: GetRandomValue(-30, 30)}, 0.3, 10));
        this.addComponent(new Update(() => this.update()));
    }

    update() {
    }

    render() {
        const transform = this.getComponent(Transform);

        DrawRectangleV(transform.position, transform.size, this.getComponent(RigidBody).isColliding ? RED : BLUE);
    }
}

export class SlimeRender extends Render {
    constructor(self) {
        super();
        this.draw = () => {
            // const body = self.getComponent(RigidBody);
            const body = self.getComponent(KinematicBody);
            const transform = self.getComponent(Transform);

            DrawRectangleLinesEx(transform, 2, body.isHit ? RED : BLUE);
        };
    }
}