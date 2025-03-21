import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class QuitGame extends Scene {
  constructor() {
    super("QuitGame");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
