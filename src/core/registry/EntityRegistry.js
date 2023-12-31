import { Entity } from "../entity/Entity.js";
import { checkClass } from "../utils/HelperFunction.js";
import Serializer from "esserializer";

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
        Serializer.registerClass(entityClass);
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

    /**
     * * @param {number} entityId 
     * @returns {Entity} 
     */
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
            [ ...this.#entities ].filter(([ , entity ]) => (
                components.every((comp) => {
                    for (const prop in entity.components) {
                        if (entity.components[prop] instanceof comp) {
                            return true;
                        }
                    }
                    return false;
                })
            )),
        );
    }

    getEntities(components = []) {
        return this.#filter(components);
    }

    getComponents(components = []) {
        return new Map([ ...this.#filter(components) ]
            .map(([ id, entity ]) => {
                const entityComponents = {};
                components.forEach((comp) => {
                    entityComponents[comp.name] = entity.getComponent(comp);
                });
                return [ id, entityComponents ];
            }),
        );
    }

    serialize() {
        const serializedEntites = [ ...this.#entities ].map(([ id, entity ]) => {
            return { id: id, entity: entity.serialize() };
        });

        const serializedEntityRegistry = {
            entities: serializedEntites,
            entityTypes: this.#entityTypes,
            lastId: this.#lastId,
        };

        return serializedEntityRegistry;
    }

    deserialize(data) {
        this.#lastId = data.lastId;
        this.#entityTypes = data.entityTypes;
        this.#entities = new Map();
        for (const {id, entity: serializedEntity} of data.entities) {
            const deserializedEntity = Serializer.deserialize(serializedEntity);
            const entity = deserializedEntity.restore(deserializedEntity);
            entity.id = deserializedEntity.id;
            this.#entities.set(id, entity);
        }
    }
    
    clear() {
        this.#entities = new Map();
        this.#entityTypes = new Map();
        this.#lastId = 0;
    }
}