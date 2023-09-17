import { checkInstance } from "../utils/HelperFunction.js";
import Serializer from "esserializer";

export class Entity {
    constructor() {
        this.components = {};
        this.id;
    }

    static Component = class {
        serialize() {}
        deserialize() {}
    };
    
    addComponent(component) {
        checkInstance(component, Entity.Component);
        this.components[component.constructor.name] = component;
    }

    /**
     * @template T
     * @param { new () => T } componentClass 
     * @returns { T }
     */
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

    serialize() {
        return Serializer.serialize(this);
    }

    restore(data) {}
}

Serializer.registerClass(Entity);
Serializer.registerClass(Entity.Component);