import { Entity } from "../../src/core/entity/Entity.js";
import { Render } from "../../src/core/component/Render.js";
import { Transform } from "../../src/core/component/Transform.js";
import { RigidBody } from "../../src/core/component/RigidBody.js";
import { Update } from "../../src/core/component/Update.js";
import { DrawRectangleLinesEx, DrawRectangleV } from "../../src/core/Function.js";
import { BLUE, RED } from "../../src/core/Enums.js";
import { KinematicBody } from "../../src/core/component/KinematicBody.js";

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