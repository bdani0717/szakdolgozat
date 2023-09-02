import { Entity } from "../entity/Entity.js";

export class Body extends Entity.Component {
    static TYPE = "";

    constructor(type, friction = 0) {
        super();
        this.type = type;

        this.velocity = {x: 0, y: 0};
        this.restitution = 0
        this.mass = 0;
        this.friction = Math.max(friction, 0);

        this.isColliding = false;
        this.collisions = [];
    }
}