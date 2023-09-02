import { Tile } from "../core/entity/Tile.js";

export class Stone extends Tile {
    constructor(x, y) {
        super(x, y, "stone", 2);
    }
}