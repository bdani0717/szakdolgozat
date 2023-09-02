import { Body } from "./Body.js";

export class StaticBody extends Body {
    static TYPE = "staticbody";

    constructor(transform, friction = 0) {
        super(StaticBody.TYPE, friction);
        
        this.transform = transform;
    }
}    