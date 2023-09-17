import { Entity } from "../../src/core/entity/Entity.js";
import { Render } from "../../src/core/component/Render.js";
import { Transform } from "../../src/core/component/Transform.js";
import { RigidBody } from "../../src/core/component/RigidBody.js";
import { Update } from "../../src/core/component/Update.js";
import { Sprite } from "../../src/core/utils/Sprite.js";
import { EntitySystem } from "../../src/core/EntitySystem.js";
import { DrawRectangleLinesEx, DrawText, GetFrameTime, GetMouseX, GetMouseY, IsKeyDown, IsKeyPressed, IsMouseButtonDown } from "../../src/core/Function.js";
import { KEY_A, KEY_D, KEY_S, KEY_SPACE, KEY_W, KEY_X, MOUSE_BUTTON_LEFT, ORANGE, WHITE } from "../../src/core/Enums.js";
import { SoundRegistry } from "../../src/core/registry/SoundRegistry.js";

import ESSerializer from "esserializer";

export class Player extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 128, 200));
        this.addComponent(new PlayerUpdate(this));
        this.addComponent(new PlayerRender(this));
        this.addComponent(new RigidBody(this.getComponent(Transform), {x: 0, y: 0}, 0.2, 1000));
        this.animations = {
            "idleLeft": new Sprite("playerIdleLeft", 6, 125),
        };
    }

    restore(data) {
        const player = new Player(0, 0);
        player.addComponent(data.getComponent(Transform));
        player.addComponent(data.getComponent(RigidBody));
        player.getComponent(RigidBody).transform = player.getComponent(Transform);

        return player;
    }
}

export class PlayerRender extends Render {
    constructor(self) {
        super();
        this.zIndex = 1;
        this.draw = () => {
            const body = self.getComponent(RigidBody);
            const transform = body.transform;
            
            DrawRectangleLinesEx(transform, 2, body.isHit ? WHITE : ORANGE);
            DrawText(`vel: x:${body.velocity.x.toFixed(2)} y: ${body.velocity.y.toFixed(2)}`, transform.x + transform.width, transform.y, 20, WHITE);
            self.animations["idleLeft"].draw({x: transform.position.x, y: transform.position.y - 38});
        };
    }
}

export class PlayerUpdate extends Update{
    constructor(self) {
        super();
        this.update = () => {
            const speed = 3000;
            const body = self.getComponent(RigidBody);
            const velocity = body.velocity;

            if (IsKeyDown(KEY_A)) { velocity.x -= speed * GetFrameTime(); }
            if (IsKeyDown(KEY_D)) { velocity.x += speed * GetFrameTime(); }
            if (IsKeyDown(KEY_W)) { velocity.y -= speed * GetFrameTime(); }
            if (IsKeyDown(KEY_S)) { velocity.y += speed * GetFrameTime(); }
            if (IsKeyPressed(KEY_SPACE)) { 
                velocity.y = -2000;
                SoundRegistry.playSound("coin");
            }
            if (IsKeyDown(KEY_X)) { velocity.x = 0; velocity.y = 0; }

            if (IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
                const projectalVelocity = {
                    x: GetMouseX() - body.transform.x, 
                    y: GetMouseY() - body.transform.y, 
                };
                
                for (let j = 0; j < 1; j++) {
                    for (let i = 0; i < 1; i++) {
                        EntitySystem.createEntity("Projectal", 
                            body.transform.x + i,
                            body.transform.y + i,
                            projectalVelocity.x,
                            projectalVelocity.y, 
                        );
                    }
                }
            }
        };
    }
}

ESSerializer.registerClasses([ Player, PlayerRender, PlayerUpdate, Sprite ]);
