import { Scene } from "../../src/core/Scene.js";
import { EntitySystem } from "../../src/core/EntitySystem.js";
import { Slime } from "../entities/Slime.js";
import { Renderer } from "../../src/core/renderer/Renderer.js";
import { Tile } from "../../src/core/entity/Tile.js";
import { TESTMAP, TileMap } from "../../src/core/TileMap.js";
import { Grass } from "../tiles/Grass.js";
import { Stone } from "../tiles/Stone.js";
import { Player } from "../entities/Player.js";
import { TextureRegistry } from "../../src/core/registry/TextureRegistry.js";
import { Projectal } from "../../src/core/entity/Projectal.js";
import { DrawText, IsKeyDown, GetMouseWheelMove, GetFPS, GetMouseDelta, ClearBackground, IsKeyPressed } from "../../src/core/Function.js";
import { KEY_I, KEY_LEFT_CONTROL, KEY_U, SKYBLUE, WHITE } from "../../src/core/Enums.js";
import { SoundRegistry } from "../../src/core/registry/SoundRegistry.js";
import { PlayerKinematic } from "../entities/PlayerKinematic.js";

export class GameLoop extends Scene {
    constructor() {
        super();
        TextureRegistry
            .registerTexture("playerIdleLeft", "assets/player/idle_left.png")
            .registerTexture("tile", "assets/tile/tile.png")
            .registerTexture("grass", "assets/tile/grass.png")
            .registerTexture("stone", "assets/tile/stone.png");

        SoundRegistry
            .registerSound("coin", "assets/coin.wav")
            .registerSound("sound", "assets/sound.wav")
            .registerSound("tanatana", "assets/tanatana.ogg")
            .setSoundVolume("coin", 0.3)
            .setSoundVolume("sound", 0.3)
            .setMasterVolume(0.7);

        EntitySystem
            .registerEntity(Slime)
            .registerEntity(Player)
            .registerEntity(PlayerKinematic)
            .registerEntity(Tile)
            .registerEntity(Grass)
            .registerEntity(Stone)
            .registerEntity(Projectal);
    }

    update() {       
        Renderer.zoom += GetMouseWheelMove() / 4;
        if (IsKeyDown(KEY_LEFT_CONTROL)) {
            Renderer.position.x -= GetMouseDelta().x / Renderer.zoom; 
            Renderer.position.y -= GetMouseDelta().y / Renderer.zoom; 
        }

        if (IsKeyPressed(KEY_U)) {
            this.serializedData = EntitySystem.serialize();
            EntitySystem.clear();
        }

        if (IsKeyPressed(KEY_I)) {
            EntitySystem.deserialize(this.serializedData);
        }
    }

    drawWorld() {
        ClearBackground(SKYBLUE);
    }

    drawUi() {
        DrawText(`fps: ${GetFPS()}`, 4, 4, 20, WHITE);
        DrawText(`zoom: ${Renderer.zoom.toFixed(3)}`, 4, 22, 20, WHITE);
        DrawText(`entities: ${EntitySystem.size}`, 4, 40, 20, WHITE);
    }

    onSceneLoad() {
        EntitySystem.createEntity("Player", 700, 0);
        EntitySystem.createEntity("Slime", 200, 700);
        EntitySystem.createEntity("PlayerKinematic", 900, 0);
        EntitySystem.createEntity("Slime", 300, 700);
        EntitySystem.createEntity("Slime", 400, 700);

        new TileMap(TESTMAP, EntitySystem);
    }

    onSceneUnload() {
        // EntitySystem.serialize();
        EntitySystem.clear();
    }
}