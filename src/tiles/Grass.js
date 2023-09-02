import { Tile } from "../core/entity/Tile.js";

export class Grass extends Tile {
    constructor(x, y) {
        super(x, y, "grass", 1);
    }
}