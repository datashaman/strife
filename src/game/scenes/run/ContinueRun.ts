import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class ContinueRun extends Scene {
  constructor() {
    super("ContinueRun");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
