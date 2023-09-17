import { Entity } from "../../src/core/entity/Entity.js";
import { Render } from "../../src/core/component/Render.js";
import { Transform } from "../../src/core/component/Transform.js";
import { RigidBody } from "../../src/core/component/RigidBody.js";
import { Update } from "../../src/core/component/Update.js";
import { DrawRectangleLinesEx } from "../../src/core/Function.js";
import { BLUE, RED } from "../../src/core/Enums.js";
import ESSerializer from "esserializer";

export class Slime extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 48, 48));
        this.addComponent(new SlimeRender(this));
        // this.addComponent(new KinematicBody(this.getComponent(Transform), {x: 0, y: 0}, 0.3, 10));
        this.addComponent(new RigidBody(this.getComponent(Transform), {x: 0, y: 0}, 0.3, 10));
        this.addComponent(new Update(() => this.update()));
    }

    update() {
    }

    restore(data) {
        const slime = new Slime(0, 0);
        slime.addComponent(data.getComponent(Transform));
        slime.addComponent(data.getComponent(RigidBody));
        slime.getComponent(RigidBody).transform = slime.getComponent(Transform);

        return slime;
    }
}

export class SlimeRender extends Render {
    constructor(self) {
        super();
        this.draw = () => {
            const body = self.getComponent(RigidBody);
            const transform = self.getComponent(Transform);

            DrawRectangleLinesEx(transform, 2, body.isHit ? RED : BLUE);
        };
    }
}

ESSerializer.registerClass(SlimeRender);