import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class PauseRun extends Scene {
  constructor() {
    super("PauseRun");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
