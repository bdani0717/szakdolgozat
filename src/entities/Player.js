import { Entity } from "../core/entity/Entity.js";
import { Render } from "../core/component/Render.js";
import { Transform } from "../core/component/Transform.js";
import { RigidBody } from "../core/component/RigidBody.js";
import { Update } from "../core/component/Update.js";
import { Sprite } from "../core/utils/Sprite.js";
import { EntitySystem } from "../core/EntitySystem.js";
import { DrawRectangleLinesEx, GetFrameTime, GetMouseX, GetMouseY, IsKeyDown, IsKeyPressed, IsMouseButtonDown } from "../core/Function.js";
import { KEY_A, KEY_D, KEY_S, KEY_SPACE, KEY_W, KEY_X, MOUSE_BUTTON_LEFT, ORANGE, WHITE } from "../core/Enums.js";
import { SoundRegistry } from "../core/registry/SoundRegistry.js";

import ESSerializer from "esserializer";

export class Player extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new Transform(x, y, 128, 200));
        this.addComponent(new PlayerUpdate(this));
        this.addComponent(new PlayerRender(this));
        this.addComponent(new RigidBody(this.getComponent(Transform), {x: 0, y: 0}, 0.5, 10));
        this.animations = {
            "idleLeft": new Sprite("playerIdleLeft", 6, 125),
        };
    }

    deserialize(data) {
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
            self.animations["idleLeft"].draw({x: transform.position.x, y: transform.position.y - 38});
        };
    }
}

export class PlayerUpdate extends Update{
    constructor(self) {
        super();
        this.update = () => {
            const speed = 1000;
            const body = self.getComponent(RigidBody);
            const velocity = body.velocity;

            if (IsKeyDown(KEY_A)) { velocity.x -= speed * GetFrameTime(); }
            if (IsKeyDown(KEY_D)) { velocity.x += speed * GetFrameTime(); }
            if (IsKeyDown(KEY_W)) { velocity.y -= speed * GetFrameTime(); }
            if (IsKeyDown(KEY_S)) { velocity.y += speed * GetFrameTime(); }
            if (IsKeyPressed(KEY_SPACE)) { 
                velocity.y = -600;
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
