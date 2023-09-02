import r from "raylib";
import { EntitySystem } from "../EntitySystem.js";
import { Render } from "../component/Render.js";

export class Renderer {
    static #camera = r.Camera2D(
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        0,
        1
    );
    
    static renderWorld(method) {
        r.BeginDrawing();
        r.BeginMode2D(this.#camera);

        r.ClearBackground(r.BLACK);
        method();

        let drawable = EntitySystem.getComponents([Render]);
        drawable = [...drawable].sort((a, b) => a[1].Render.zIndex - b[1].Render.zIndex);
        for (const [, components] of drawable) {
            components.Render.draw();
        }

        r.EndMode2D();
    }

    static renderUi(method) {
        if (method) {
            method();
        } 
        r.EndDrawing();
    }

    static screenToWorld(position) {
        return r.GetScreenToWorld2D(position, this.#camera);
    }

    static reset() {
        this.zoom = 1;
        this.offset = {x: 0, y: 0};
        this.position = {x: 0, y: 0};
        this.rotation = 0;
    }

    static get position() {
        return this.#camera.target;
    }

    static get offset() {
        return this.#camera.offset;
    }

    static get zoom() {
        return this.#camera.zoom;
    }

    static get rotation() {
        return this.#camera.rotation;
    }

    static set position(position) {
        this.#camera.target = position;
    }

    static set offset(offset) {
        this.#camera.offset = offset;
    }

    static set zoom(zoom) {
        this.#camera.zoom = zoom;
    }

    static set rotation(rotation) {
        this.#camera.rotation = rotation;
    }
}