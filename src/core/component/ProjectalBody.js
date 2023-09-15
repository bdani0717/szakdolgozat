import { Body } from "./Body.js";
import Serializer from "esserializer";

export class ProjectalBody extends Body {
    static TYPE = "projectalbody";

    constructor(transform, velocity, useGravity = false) {
        super(ProjectalBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
        this.useGravity = useGravity;
    }
}

Serializer.registerClass(ProjectalBody);