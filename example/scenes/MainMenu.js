import { Scene } from "../../src/core/Scene.js";
import { GameLoop } from "./GameLoop.js";
import { Renderer } from "../../src/core/renderer/Renderer.js";
import { ClearBackground, DrawText, GetMouseDelta, GetMouseWheelMove, GetScreenHeight, GetScreenWidth, IsKeyDown, IsKeyPressed } from "../../src/core/Function.js";
import { GRAY, KEY_LEFT_CONTROL, KEY_SPACE, YELLOW } from "../../src/core/Enums.js";

export class MainMenu extends Scene {
    update() {
        Renderer.zoom += GetMouseWheelMove() / 4;
        if (IsKeyDown(KEY_LEFT_CONTROL)) {
            Renderer.position.x -= GetMouseDelta().x / Renderer.zoom; 
            Renderer.position.y -= GetMouseDelta().y / Renderer.zoom; 
        }

        if (IsKeyPressed(KEY_SPACE)) {
            this.nextScene = GameLoop;
        }
    }

    drawWorld() {
        ClearBackground(YELLOW);
        DrawText(
            "main menu scene",
            GetScreenWidth() / 2,
            GetScreenHeight() / 2,
            40,
            GRAY,
        );
    }

    drawUi() {
    }

    onSceneLoad() {
        console.log("[LOGGER]: MainMenu scene loading...");
    }

    onSceneUnload() {
        console.log("[LOGGER]: MainMenu scene unloading...");
    }
}