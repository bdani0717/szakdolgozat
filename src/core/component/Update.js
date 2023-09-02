import { Entity } from "../entity/Entity.js";

export class Update extends Entity.Component {
    constructor(method) {
        super();
        this.update = method;
    }
}