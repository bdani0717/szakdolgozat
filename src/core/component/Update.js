import { Entity } from "../entity/Entity.js";
import Serializer from "esserializer";

export class Update extends Entity.Component {
    constructor(method) {
        super();
        this.update = method;
    }
}

Serializer.registerClass(Update);