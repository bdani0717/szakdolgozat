import { Entity } from "../entity/Entity.js";
import Serializer from "esserializer";

export class Render extends Entity.Component {    
    constructor(method, zIndex = 0) {
        super();
        this.zIndex = zIndex;
        this.draw = method;
    }
}

Serializer.registerClass(Render);