import { GameEngine } from "../src/core/GameEngine.js";
import { GameLoop } from "./scenes/GameLoop.js";
import { MainMenu } from "./scenes/MainMenu.js";

new GameEngine(1920, 1080)
    .setTitle("NodeJS Engine 0.2.0")
    .setMaxFps(60)
    .addScene(MainMenu)    
    .addScene(GameLoop)    
    .run();