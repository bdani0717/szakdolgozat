import { Entity } from "../entity/Entity.js";
import Serializer from "esserializer";

export class Body extends Entity.Component {
    static TYPE = "";

    constructor(type, friction = 0) {
        super();
        this.type = type;

        this.mass = Infinity;
        this.velocity = {x: 0, y: 0};
        this.friction = Math.max(friction, 0);

        this.collisions = [];
    }

    get isHit() {
        return this.collisions.length > 0;
    }

    applyForce(force) {}

    resolveCollision(other, normal) {}
}

Serializer.registerClass(Body);