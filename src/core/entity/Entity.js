import { checkInstance } from "../utils/HelperFunction.js";

export class Entity {
    constructor() {
        this.components = {};
        this.id;
    }

    static Component = class {};
    
    addComponent(component) {
        checkInstance(component, Entity.Component);
        this.components[component.constructor.name] = component;
    }

    getComponent(componentClass) {
        for (const prop in this.components) {
            if (this.components[prop] instanceof componentClass) {
                return this.components[prop];
            }
        }
    }

    removeComponent(componentClass) {
        this.components[componentClass.name] = undefined;
        delete this.components[componentClass.name];
    }

    hasComponent(componentClass) {
        for (const prop in this.components) {
            if (this.components[prop] instanceof componentClass) {
                return true;
            }
        }
        return false;
    }
}

