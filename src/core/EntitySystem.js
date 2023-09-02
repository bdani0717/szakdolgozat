import { PhysicsEngine } from "./physics/PhysicsEngine.js";
import { EntityRegistry } from "./registry/EntityRegistry.js";
import { Update } from "./component/Update.js";

export class EntitySystem {
    static #physicsEngine;
    static #entityRegistry;

    static init() {
        this.#entityRegistry = new EntityRegistry();
        this.#physicsEngine = new PhysicsEngine(this.#entityRegistry, 5, 20);
    }

    static registerEntity(entityClass) {
        this.#entityRegistry.registerEntity(entityClass);
        return this;
    }

    static createEntity(entityClassName, ...args) {
        const entity = this.#entityRegistry.createEntity(entityClassName, ...args);
        this.#physicsEngine.addEntity(entity);
        return entity;
    }

    static getEntity(entityId) {
        return this.#entityRegistry.getEntity(entityId);
    }

    static hasEntity(entityId) {
        return this.#entityRegistry.hasEntity(entityId);
    }

    static removeEntity(entityId) {
        this.#physicsEngine.removeEntity(entityId);
        this.#entityRegistry.removeEntity(entityId);
    }

    static getEntitiesInArea(area) {
        return this.#physicsEngine.getEntitiesInArea(area);
    }

    static getComponents(components = []) {
        return this.#entityRegistry.getComponents(components);
    }

    static getEntities(components = []) {
        return this.#entityRegistry.getEntities(components);
    }

    static get size() {
        return this.#entityRegistry.size;
    }

    static clear() {
        this.#entityRegistry.clear();
        this.#physicsEngine.clear();
    }

    static update() {
        this.#physicsEngine.update();
        for (const [, components] of EntitySystem.getComponents([Update])) {
            components.Update.update();
        }
    }
}