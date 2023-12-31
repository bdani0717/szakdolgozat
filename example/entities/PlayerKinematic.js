import { DrawRectangleRec, IsKeyDown } from "../../src/core/Function.js";
import { KinematicBody } from "../../src/core/component/KinematicBody.js";
import { Render } from "../../src/core/component/Render.js";
import { Update } from "../../src/core/component/Update.js";
import { Entity } from "../../src/core/entity/Entity.js";
import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP, ORANGE, WHITE } from "../../src/core/Enums.js";
import { Transform } from "../../src/core/component/Transform.js";
import ESSerialzer from "esserializer";

export class PlayerKinematic extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 48, 48));
        this.addComponent(new KinematicBody(this.getComponent(Transform), { x: 0, y: 0 }, 10, Infinity));
        this.addComponent(new PlayerKinematicUpdate(this));
        this.addComponent(new PlayerKinematicRender(this));
    }
    
    restore(data) {
        const playerKinematic = new PlayerKinematic(0, 0);
        playerKinematic.addComponent(data.getComponent(Transform));
        playerKinematic.addComponent(data.getComponent(KinematicBody));
        playerKinematic.getComponent(KinematicBody).transform = playerKinematic.getComponent(Transform);

        return playerKinematic;
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
            velocity.x = 0;
            velocity.y = 0;

            if (IsKeyDown(KEY_LEFT)) { velocity.x = -speed; }
            else if (IsKeyDown(KEY_RIGHT)) { velocity.x = speed; }
            if (IsKeyDown(KEY_UP)) { velocity.y = -speed; }
            else if (IsKeyDown(KEY_DOWN)) { velocity.y = speed; }
        };
    }
}

ESSerialzer.registerClass(PlayerKinematicUpdate);
ESSerialzer.registerClass(PlayerKinematicRender);