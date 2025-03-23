import {Scene} from "phaser";
import {EventBus} from "../../EventBus";

export class QuitRun extends Scene {
    constructor() {
        super("QuitRun");
    }

    preload() {
    }

    create() {
        EventBus.emit("current-scene-ready", this);
    }
}
