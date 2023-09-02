import { Body } from "./Body.js";

export class ProjectalBody extends Body {
    static TYPE = "projectalbody";

    constructor(transform, velocity) {
        super(ProjectalBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
    }
}