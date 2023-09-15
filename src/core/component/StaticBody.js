import { Body } from "./Body.js";
import Serializer from "esserializer";

export class StaticBody extends Body {
    static TYPE = "staticbody";

    constructor(transform, friction = 0) {
        super(StaticBody.TYPE, friction);
        
        this.transform = transform;
    }
}    

Serializer.registerClass(StaticBody);