import { Entity } from "../entity/Entity.js";

export class Transform extends Entity.Component {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get position() {
        return { x: this.x, y: this.y};
    }

    get size() {
        return { x: this.width, y: this.height };
    }

    set position(position) {
        this.x = position.x;
        this.y = position.y;
    }

    set size(size) {
        this.width = size.x;
        this.height = size.y;
    }

    move(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}