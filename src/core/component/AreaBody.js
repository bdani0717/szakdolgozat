import { Body } from "./Body.js";
import Serializer from "esserializer";

export class AreaBody extends Body {
    static TYPE = "areabody";

    constructor(transform) {
        super(AreaBody.TYPE);
        
        this.transform = transform;
    }
}    

Serializer.registerClass(AreaBody);