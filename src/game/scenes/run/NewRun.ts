import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class NewRun extends Scene {
  constructor() {
    super("NewRun");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
