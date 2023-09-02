import { Body } from "./Body.js";

export class AreaBody extends Body {
    static TYPE = "areabody";

    constructor(transform) {
        super(AreaBody.TYPE);
        
        this.transform = transform;
    }
}    