export class Scene {
    #nextSceneName;
    constructor() {
        this.#nextSceneName = this.constructor.name;
    }

    set nextScene(scene) {
        this.#nextSceneName = scene.name;
    }

    get nextScene() {
        return this.#nextSceneName;
    }

    update() {
        console.log("scene update method called");
    }

    drawWorld() {
        console.log("scene draw world method called");
    }

    drawUi() {
        console.log("scene draw ui method called");
    }

    onSceneLoad() {
        console.log("scene onSceneLoad method called");
    }

    onSceneUnload() {
        console.log("scene onSceneUnload method called");
    }
}