import { GameObjects, Scene } from "phaser";

import { EventBus } from "../EventBus";
import { ContinueGame } from "./run/ContinueRun.ts";
import { GameOptions } from "./game/GameOptions.ts";
import { NewGame } from "./run/NewRun.ts";
import { QuitGame } from "./game/QuitGame.ts";

export class MainMenu extends Scene {
  background: GameObjects.Image;

  items: [
    {
      text: "Continue Game";
      scene: ContinueGame;
    },
    {
      text: "New Game";
      scene: NewGame;
    },
    {
      text: "Options";
      scene: GameOptions;
    },
    {
      text: "Quit";
      scene: QuitGame;
    },
  ];

  constructor() {
    super("MainMenu");
  }

  create() {
    this.createBackgroundGradient(512, 384, 1024, 768, 0x0d47a1, 0x2e8b57, 16);

    this.createBackgroundGradient(512, 576, 1024, 384, 0x22cc33, 0x4a2e17, 32);

    this.createRectangle(512, 384, 640, 400, 0xc5a84d, 0xffd700, 16);

    this.createRectangle(512, 192, 256, 64, 0x4a2e17, 0x997358, 16);

    this.add
      .text(512, 192, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 32,
        color: "#FFD700",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5, 0.5);

    EventBus.emit("current-scene-ready", this);
  }

  createRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    strokeColor: number,
    strokeSize: number,
  ) {
    return this.add
      .rectangle(x, y, width, height, color)
      .setStrokeStyle(strokeSize, strokeColor);
  }

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
