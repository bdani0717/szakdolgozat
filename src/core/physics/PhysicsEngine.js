import { RigidBody } from "../component/RigidBody.js";
import { SpatialHashGrid } from "../utils/SpatialHashGrid.js";
import { checkAABB, getBroadPhaseArea } from "./Collision.js";
import { CollisionResolver } from "./CollisionResolver.js";
import { ProjectalBody } from "../component/ProjectalBody.js";
import { StaticBody } from "../component/StaticBody.js";
import { KinematicBody } from "../component/KinematicBody.js";
import { AreaBody } from "../component/AreaBody.js";
import { Body } from "../component/Body.js";
import { EntitySystem } from "../EntitySystem.js";
import { GetFrameTimeMS } from "../Function.js";
import { Vector } from "../utils/Vector.js";


export class PhysicsEngine {
    #entityRegistry;
    #clients = {};
    #containers = {};
    #iterations;

    constructor(entityRegistry, iterations, gravity = {x: 0, y: 0}) {
        this.#entityRegistry = entityRegistry;
        this.#iterations = iterations;
        this.gravity = gravity;

        this.#initClientsContainers({x: 0, y: 0, width: 2000, height: 1200});
    }

    deserialize(entityRegistry, data) {
        this.#entityRegistry = entityRegistry;
        this.#iterations = data.iterations;
        this.gravity = data.gravity;

        this.#initClientsContainers({x: 0, y: 0, width: 2000, height: 1200});

        [ ...entityRegistry.getComponents([ Body ]) ].forEach(([ id, comp ]) => {            
            const body = comp.Body;
            const transform = body.transform;
            const client = this.#containers[body.type].newClient(transform.position, transform.size, {entityId: id});
            this.#clients[body.type].set(id, client);
        });
    }

    update() {
        this.#applyGravity();
        this.#handleCollisions();
        this.#updatePosition(KinematicBody.TYPE);
        this.#updatePosition(RigidBody.TYPE);
        this.#updatePosition(ProjectalBody.TYPE);
    }

    addEntity(entity) {
        if (!entity.hasComponent(Body)) {
            return;
        }
        
        const body = entity.getComponent(Body);
        const transform = body.transform;
        const client = this.#containers[body.type].newClient(transform.position, transform.size, {entityId: entity.id});
        this.#clients[body.type].set(entity.id, client);
    }

    removeEntity(entityId) {
        const entity = EntitySystem.getEntity(entityId);
        const body = entity.getComponent(Body);
        if (!body) {
            return;
        }
        const type = body.type;
        const client = this.#clients[type].get(entity.id);
        this.#containers[type].removeClient(client);
        this.#clients[type].delete(entity.id);
    }

    getEntitiesInArea(area) {
        const entitiesInArea = new Map();
        const clientsInArea = [
            ...this.#containers[ProjectalBody.TYPE].find(area),
            ...this.#containers[StaticBody.TYPE].find(area),
            ...this.#containers[RigidBody.TYPE].find(area),
            ...this.#containers[KinematicBody.TYPE].find(area),
            ...this.#containers[AreaBody.TYPE].find(area),
        ];

        for (const client of clientsInArea) {
            const entityId = client.data.entityId;
            const entity = this.#entityRegistry.getEntity(entityId);
            const body = entity.getComponent(Body);
            if (checkAABB(body.transform, area)) {
                entitiesInArea.set(entityId, entity);
            }
        }

        return entitiesInArea;
    }

    clear() {
        this.#initClientsContainers({x: 0, y: 0, width: 2000, height: 1200});
    }

    #initClientsContainers(area) {
        this.#clients[ProjectalBody.TYPE] = new Map();
        this.#clients[StaticBody.TYPE] = new Map();
        this.#clients[RigidBody.TYPE] = new Map();
        this.#clients[KinematicBody.TYPE] = new Map();
        this.#clients[AreaBody.TYPE] = new Map();
        
        this.#containers[ProjectalBody.TYPE] = new SpatialHashGrid(area, 12);
        this.#containers[StaticBody.TYPE] = new SpatialHashGrid(area, 48);
        this.#containers[RigidBody.TYPE] = new SpatialHashGrid(area, 48);
        this.#containers[KinematicBody.TYPE] = new SpatialHashGrid(area, 48);
        this.#containers[AreaBody.TYPE] = new SpatialHashGrid(area, 48);
    }

    #updateClient(client, body) {
        if (body.type === RigidBody.TYPE || body.type === ProjectalBody.TYPE || body.type === KinematicBody.TYPE) {
            client.position = body.transform.position;
            this.#containers[body.type].updateClient(client);
        }
    }

    #updateClientById(entityId, body) {
        if (body.type === RigidBody.TYPE || body.type === ProjectalBody.TYPE || body.type === KinematicBody.TYPE) {
            const client = this.#clients[body.type].get(entityId);
            client.position = body.transform.position;
            this.#containers[body.type].updateClient(client);
        }
    }
    
    /**
     * Detect collisions
     */
    #handleCollisions() {
        this.#resetCollisions();
        
        this.#handleCollisionsByType(KinematicBody.TYPE, [ RigidBody.TYPE, KinematicBody.TYPE, StaticBody.TYPE ]);
        
        for (let i = 0; i < this.#iterations; i++) {
            this.#handleCollisionsByType(RigidBody.TYPE, [ RigidBody.TYPE, KinematicBody.TYPE, StaticBody.TYPE ]);
        }
        
        this.#handleCollisionsByType(KinematicBody.TYPE, [ RigidBody.TYPE, KinematicBody.TYPE, StaticBody.TYPE ]);

        this.#handleCollisionsByType(ProjectalBody.TYPE, [ RigidBody.TYPE, KinematicBody.TYPE, StaticBody.TYPE ]);

        this.#handleCollisionsByType(AreaBody.TYPE, [ RigidBody.TYPE, KinematicBody.TYPE, ProjectalBody.TYPE ]);
    }

    #handleCollisionsByType(typeA, types) {
        for (const typeB of types) {
            for (const [ , client ] of this.#clients[typeA]) {
                this.#handleCollisionEntity(client, typeB);
            }
        }
    }
    
    /**
     * Set colliders into default state (not colliding, and empty collision list)
     */
    #resetCollisions() {
        const allClients = [
            ...this.#clients[RigidBody.TYPE], 
            ...this.#clients[ProjectalBody.TYPE], 
            ...this.#clients[StaticBody.TYPE], 
            ...this.#clients[AreaBody.TYPE], 
            ...this.#clients[KinematicBody.TYPE],
        ];
        for (const [ , client ] of allClients) {
            const body = EntitySystem.getEntity(client.data.entityId).getComponent(Body);
            body.collisions = [];
            body.isColliding = false;
        }
    }

    /** 
     * Update position of entities based on their velocity
     */
    #updatePosition(type) {
        for (const [ , client ] of this.#clients[type]) {
            const entityId = client.data.entityId;
            const body = this.#entityRegistry.getEntity(entityId).getComponent(Body);
            const velocity = body.velocity;
            body.transform.moveDeltaTime(velocity);
            this.#updateClientById(entityId, body);
        }
    }

    #handleCollisionEntity(client, type) {
        const entityId = client.data.entityId;
        const body = this.#entityRegistry.getEntity(entityId).getComponent(Body);
        const transform = body.transform;
        const velocity = body.velocity;
        const searchArea = getBroadPhaseArea(transform, Vector.scale(velocity, GetFrameTimeMS()));

        // No need to check collisions against projectals
        const clientsInRange = [ ...this.#containers[type].find(searchArea) ];

        clientsInRange.sort((a, b) => {
            const distanceA = Math.pow(transform.position.x - a.position.x, 2) + Math.pow(transform.position.y - a.position.y, 2);
            const distanceB = Math.pow(transform.position.x - b.position.x, 2) + Math.pow(transform.position.y - b.position.y, 2);
            return distanceA - distanceB;
        });

        for (const otherClient of clientsInRange) {
            const otherId = otherClient.data.entityId;
            const otherBody = this.#entityRegistry.getEntity(otherId).getComponent(Body);
            if (otherId !== entityId) {
                const collision = new CollisionResolver(body, otherBody);
                const collisionData = collision.resolve();

                if (collisionData.collision) {
                    body.collisions.push({
                        entityId: otherId,
                        normal: collisionData.normal,
                    });
                    otherBody.collisions.push({
                        entityId: entityId,
                        normal: Vector.scale(collisionData.normal, -1),
                    });
                }
            }
        }

        this.#updateClient(client, body);
    }

    #applyGravity() {
        const allClients = [
            ...this.#clients[RigidBody.TYPE], 
            ...this.#clients[KinematicBody.TYPE],
            ...this.#clients[ProjectalBody.TYPE],
        ];

        for (const [ , client ] of allClients) {
            const body = this.#entityRegistry.getEntity(client.data.entityId).getComponent(Body);
            if (body.useGravity) { 
                body.applyForce(Vector.scale(this.gravity, GetFrameTimeMS()));
            }
        }
    }

    serialize() {
        const serializedPhysicsEngine = {
            gravity: this.gravity,
            iterations: this.#iterations,
        };

        return serializedPhysicsEngine;
    }
}