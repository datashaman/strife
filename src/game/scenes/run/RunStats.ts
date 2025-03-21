import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class RunStats extends Scene {
  constructor() {
    super("RunStats");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
