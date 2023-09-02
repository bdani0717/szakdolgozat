import { Renderer } from "../renderer/Renderer.js";
import { Scene } from "../Scene.js";
import { checkClass } from "../utils/HelperFunction.js";

export class SceneRegistry {
    #sceneRegistry;
    #currentSceneName;

    constructor() {
        this.#sceneRegistry = new Map();
    }

    registerScene(sceneClass) {
        const sceneName = sceneClass.name;

        if (this.#sceneRegistry.has(sceneName)) {
            throw new Error(`Scene ${sceneName} is already registered`);
        }

        checkClass(sceneClass, Scene);

        this.#sceneRegistry.set(sceneName, new sceneClass());
        if (!this.#currentSceneName) {
            this.#switchToScene(sceneName);
        }
    }

    get currentScene() {
        return this.#sceneRegistry.get(this.#currentSceneName);
    }

    update() {
        const nextSceneName = this.currentScene.nextScene;
        if (nextSceneName !== this.#currentSceneName) {
            this.#switchToScene(nextSceneName);
        }
    }

    #switchToScene(sceneName) {
        if (!this.#sceneRegistry.has(sceneName)) {
            throw new Error(`${sceneName} is not registered`);
        }

        if (this.#currentSceneName) {
            this.currentScene.onSceneUnload();
        }
        Renderer.reset();
        this.#currentSceneName = sceneName;
        this.currentScene.onSceneLoad();
    }
}