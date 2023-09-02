import { Entity } from "./Entity.js";
import { Render } from "../component/Render.js";
import { Transform } from "../component/Transform.js";
import { Sprite } from "../utils/Sprite.js";
import { StaticBody } from "../component/StaticBody.js";

export class Tile extends Entity {
    constructor(x, y, textureName, friction) {
        super();
        this.tileSize = 48;
        this.sprites = {
            "tileSprite": new Sprite(textureName),
        };
        
        this.addComponent(new Transform(
            x * this.tileSize,
            y * this.tileSize,
            this.tileSize,
            this.tileSize,
        ));
        this.addComponent(new TileRender(this));
        this.addComponent(new StaticBody(this.getComponent(Transform), friction));
    }
}

export class TileRender extends Render {
    constructor(self) {
        super();
        this.draw = () => {
            const position = self.getComponent(StaticBody).transform.position;
            self.sprites["tileSprite"].draw(position, 3);
        };
    }
}