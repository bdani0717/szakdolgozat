import r from "raylib";

export class TextureRegistry {
    static #textures = new Map();

    static registerTexture(name, path) {
        if (this.#textures.has(name)) {
            throw new Error(`Texture with name "${name}" is already registered`);
        }

        const texture = r.LoadTexture(path);
        this.#textures.set(name, texture);
        return this;
    }

    static getTexture(name) {
        return this.#textures.get(name);
    }
}