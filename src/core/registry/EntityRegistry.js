import { Entity } from "../entity/Entity.js";
import { checkClass } from "../utils/HelperFunction.js";

export class EntityRegistry {
    #entities;
    #entityTypes;
    #lastId;

    constructor() {
        this.#entities = new Map();
        this.#entityTypes = new Map();
        this.#lastId = 0;
    }

    get size() {
        return this.#entities.size;
    }

    registerEntity(entityClass) {
        const entityName = entityClass.name;

        if (this.#entityTypes.has(entityName)) {
            throw new Error(`Entity ${entityName} is already registered`);
        }

        checkClass(entityClass, Entity);

        this.#entityTypes.set(entityName, entityClass);
    }

    createEntity(entityClassName, ...args) {
        if (!this.#entityTypes.has(entityClassName)) {
            throw new Error(`${entityClassName} is not registered`);
        }
        
        const entityId = this.#lastId++;
        const EntityClass = this.#entityTypes.get(entityClassName);
        const instance = new EntityClass(...args);
        instance.id = entityId;
        this.#entities.set(entityId, instance);
        
        return instance;
    }

    getEntity(entityId) {
        return this.#entities.get(entityId);
    }

    hasEntity(entityId) {
        return this.#entities.has(entityId);
    }

    removeEntity(entityId) {
        this.#entities.delete(entityId);
    }

    #filter(components = []) {
        return new Map(
            [...this.#entities].filter(([, entity]) => (
                components.every((comp) => {
                    for(const prop in entity.components) {
                        if (entity.components[prop] instanceof comp) {
                            return true;
                        }
                    }
                    return false;
                })
            ))
        );
    }

    getEntities(components = []) {
        return this.#filter(components);
    }

    getComponents(components = []) {
        return new Map([...this.#filter(components)]
            .map(([id, entity]) => {
                const entityComponents = {};
                components.forEach((comp) => {
                    entityComponents[comp.name] = entity.getComponent(comp);
                });
                return [id, entityComponents];
            })
        );
    }
    
    clear() {
        this.#entities = new Map();
        this.#entityTypes = new Map();
        this.#lastId = 0;
    }
}