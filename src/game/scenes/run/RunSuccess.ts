import { Scene } from "phaser";
import { EventBus } from "../../EventBus";

export class RunSuccess extends Scene {
  constructor() {
    super("RunSuccess");
  }

  preload() {}

  create() {
    EventBus.emit("current-scene-ready", this);
  }
}
