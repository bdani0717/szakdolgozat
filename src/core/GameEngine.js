import r from "raylib";
import { SceneRegistry } from "./registry/SceneRegistry.js";
import { Renderer } from "./renderer/Renderer.js";
import { EntitySystem } from "./EntitySystem.js";
import { SoundRegistry } from "./registry/SoundRegistry.js";

import { BLACK, WHITE } from "./Enums.js";
import { ClearBackground, DrawText } from "./Function.js";

export class GameEngine {
    constructor(windowWidth, windowHeight) {
        this.screenWidth = windowWidth;
        this.screenHeight = windowHeight;
        r.InitWindow(this.screenWidth, this.screenHeight, "");
        r.InitAudioDevice();
        this.sceneRegistry = new SceneRegistry();
        EntitySystem.init();

        r.BeginDrawing();

        ClearBackground(WHITE);
        DrawText("LOADING...", 960, 540, 40, BLACK);

        r.EndDrawing();
    }

    setTitle(title) {
        r.SetWindowTitle(title);
        return this;
    }

    setMaxFps(fps) {
        r.SetTargetFPS(fps);
        return this;
    }

    addScene(scene) {
        this.sceneRegistry.registerScene(scene);
        return this;
    }

    run() {
        while (!r.WindowShouldClose()) {
            this.sceneRegistry.update();
            
            EntitySystem.update();
            this.sceneRegistry.currentScene.update();
            Renderer.renderWorld(() => this.sceneRegistry.currentScene.drawWorld());
            Renderer.renderUi(() => this.sceneRegistry.currentScene.drawUi());
        }

        this.#exit();
    }

    #exit() {
        this.sceneRegistry.currentScene.onSceneUnload();
        SoundRegistry.clear();
        r.CloseAudioDevice();
        r.CloseWindow();
    }
}