import {Scene} from "phaser";

export abstract class AbstractScene extends Scene {
    createBackgroundGradient(
        x: number,
        y: number,
        width: number,
        height: number,
        color1: number,
        color2: number,
        size: number,
    ) {
        return this.add
            .image(x, y, "__WHITE")
            .setDisplaySize(width, height)
            .preFX.addGradient(color1, color2, 0.05, 0, 0, 0, 1, size);
    }
}
