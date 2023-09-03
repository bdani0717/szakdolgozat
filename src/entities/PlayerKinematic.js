import { DrawRectangleRec, IsKeyDown } from "../core/Function.js";
import { KinematicBody } from "../core/component/KinematicBody.js";
import { Render } from "../core/component/Render.js";
import { Update } from "../core/component/Update.js";
import { Entity } from "../core/entity/Entity.js";
import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP, ORANGE, WHITE } from "../core/Enums.js";
import { Transform } from "../core/component/Transform.js";

export class PlayerKinematic extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 48, 48));
        this.addComponent(new KinematicBody(this.getComponent(Transform), { x: 0, y: 0 }, 0.5, 10));
        this.addComponent(new PlayerKinematicUpdate(this));
        this.addComponent(new PlayerKinematicRender(this));
    }
}

export class PlayerKinematicRender extends Render {
    constructor(self) {
        super();
        this.zIndex = 1;
        this.draw = () => {
            const body = self.getComponent(KinematicBody);
            const transform = body.transform;
            
            DrawRectangleRec(transform, body.isHit ? WHITE : ORANGE);
        };
    }
}

export class PlayerKinematicUpdate extends Update {
    constructor(self) {
        super();
        this.update = () => {
            const speed = 200;
            const body = self.getComponent(KinematicBody);
            const velocity = body.velocity;

            if (IsKeyDown(KEY_LEFT)) { velocity.x = -speed; }
            else if (IsKeyDown(KEY_RIGHT)) { velocity.x = speed; }
            else { velocity.x = 0; }
            if (IsKeyDown(KEY_UP)) { velocity.y = -speed; }
            else if (IsKeyDown(KEY_DOWN)) { velocity.y = speed; }
            else { velocity.y = 0; }
        };
    }
}