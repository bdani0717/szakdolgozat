import { Entity } from "./Entity.js";
import { Render } from "../component/Render.js";
import { Transform } from "../component/Transform.js";
import { Sprite } from "../utils/Sprite.js";
import { StaticBody } from "../component/StaticBody.js";
import Serializer from "esserializer";

export class Tile extends Entity {
    constructor(x, y, textureName, friction) {
        super();
        this.tileSize = 48;
        this.textureName = textureName;
        this.sprites = {
            "tileSprite": new Sprite(this.textureName),
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

    restore(data) {
        const tile = new Tile(0, 0, data.textureName, 0);
        tile.tileSize = data.tileSize;
        tile.addComponent(data.getComponent(Transform));
        tile.addComponent(data.getComponent(StaticBody));
        tile.getComponent(StaticBody).transform = tile.getComponent(Transform);

        return tile;
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

Serializer.registerClass(Tile);
Serializer.registerClass(TileRender);