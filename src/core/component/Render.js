import { Entity } from "../entity/Entity.js";

export class Render extends Entity.Component {    
    constructor(method, zIndex = 0) {
        super();
        this.zIndex = zIndex;
        this.draw = method;
    }
}