import { Render } from "../component/Render.js";
import { Transform } from "../component/Transform.js";
import { Update } from "../component/Update.js";
import { Entity } from "./Entity.js";
import { ProjectalBody } from "../component/ProjectalBody.js";
import { EntitySystem } from "../EntitySystem.js";
import { DrawRectangleRec } from "../Function.js";
import { WHITE } from "../Enums.js";
import Serializer from "esserializer";

export class Projectal extends Entity {
    constructor(x, y, velX, velY) {
        super();
        this.addComponent(new Transform(x, y, 10, 10));
        this.addComponent(new ProjectalBody(this.getComponent(Transform), {x: velX, y: velY}, 0, 0));
        this.addComponent(new ProjectalRenderer(this));
        this.addComponent(new PorjectalUpdate(this));
    }

    restore(data) {
        const projectal = new Projectal(0, 0, 0, 0);
        projectal.addComponent(data.getComponent(Transform));
        projectal.addComponent(data.getComponent(ProjectalBody));
        projectal.getComponent(ProjectalBody).transform = projectal.getComponent(Transform);

        return projectal;
    }
}

export class PorjectalUpdate extends Update {
    constructor(self) {
        super();
        this.update = () => {
            const body = self.getComponent(ProjectalBody);
            if (body.isHit) {
                EntitySystem.removeEntity(self.id);
            }
        };
    }
}

export class ProjectalRenderer extends Render {
    constructor(self) {
        super();
        this.draw = () => {
            const body = self.getComponent(ProjectalBody);
            if (body.transform.x > 1920 || body.transform.y < 0 || body.transform.y > 1080 || body.transform.y < 0) {
                return;
            }
            DrawRectangleRec(body.transform, WHITE);
        };
    }
}

Serializer.registerClass(Projectal);
Serializer.registerClass(PorjectalUpdate);
Serializer.registerClass(ProjectalRenderer);