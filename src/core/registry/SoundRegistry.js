import r from "raylib";

export class SoundRegistry {
    static #sounds = new Map();

    static registerSound(name, path) {
        if (this.#sounds.has(name)) {
            throw new Error(`Sound with name "${name}" is already registered`);
        }

        const sound = r.LoadSound(path);
        this.#sounds.set(name, sound);
        return this;
    }

    static playSound(name) {
        r.PlaySound(this.#sounds.get(name));
    }

    static setSoundVolume(name, volume) {
        const sound = this.#sounds.get(name);
        r.SetSoundVolume(sound, volume);
        return this;
    }

    static setMasterVolume(volume) {
        r.SetMasterVolume(volume);
        return this;
    }

    static clear() {
        for (const [, sound] of this.#sounds) {
            r.UnloadSound(sound);
        }
    }
}