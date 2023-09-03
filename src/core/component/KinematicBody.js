import { Body } from "./Body.js";

export class KinematicBody extends Body {
    static TYPE = "kinematicbody";

    constructor(transform, velocity, restitution, mass, useGravity = false, useFriction = false) {
        super(KinematicBody.TYPE);
        
        this.transform = transform;
        this.velocity = velocity;
        this.restitution = restitution;
        this.mass = mass;
        this.useGravity = useGravity;
        this.useFriction = useFriction;
    }
}    