import {Scene} from "phaser";
import {EventBus} from "../../EventBus";

export class RunFailure extends Scene {
    constructor() {
        super("RunFailure");
    }

    preload() {
    }

    create() {
        EventBus.emit("current-scene-ready", this);
    }
}
