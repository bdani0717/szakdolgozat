import { TextureRegistry } from "../registry/TextureRegistry.js";
import { WHITE } from "../Enums.js";
import { DrawTexturePro, GetFrameTime } from "../Function.js";


export class Sprite {
    #texture;
    #frameCount;
    #frameTimeMS;
    #timer;
    #currentFrame;
    #frameWidth;
    #frameHeight;
    #source;

    constructor(textureName, frameCount = 1, frameTimeMS = 125) {
        this.#texture = TextureRegistry.getTexture(textureName);
        this.#frameCount = frameCount;
        this.#frameTimeMS = frameTimeMS;
        this.#timer = 0;
        this.#currentFrame = 0;
        this.#frameWidth = this.#texture.width / frameCount;
        this.#frameHeight = this.#texture.height;
        this.#source = {
            x: 0,  
            y: 0,
            width: this.#frameWidth,
            height: this.#frameHeight
        }
    }

    #update() {
        if (this.#frameCount === 1) {
            return;
        }

        this.#timer += GetFrameTime() * 1000;
        if (this.#timer >= this.#frameTimeMS) {
            this.#currentFrame++;
            this.#currentFrame %= this.#frameCount; 
            this.#timer = 0;
            this.#source = {
                x: this.#currentFrame * this.#frameWidth,  
                y: 0,
                width: this.#frameWidth,
                height: this.#frameHeight
            };                  
        }
    }

    draw(position, scale = 1, rotation = 0) {
        this.#update();
        const destination = {
            x: position.x,  
            y: position.y,
            width: this.#frameWidth * scale,
            height: this.#frameHeight * scale
        };
        DrawTexturePro(this.#texture, this.#source, destination, {x: 0, y: 0}, rotation, WHITE);
    }
}