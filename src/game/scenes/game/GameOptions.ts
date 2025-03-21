import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class GameOptions extends Scene {
  constructor() {
    super("GameOptions");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
