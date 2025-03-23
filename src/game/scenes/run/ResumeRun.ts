import {Scene} from "phaser";
import {EventBus} from "../../EventBus";

export class ResumeRun extends Scene {
    constructor() {
        super("ResumeRun");
    }

    preload() {
    }

    create() {
        this.registry.set("runInProgress", true);

        EventBus.emit("current-scene-ready", this);
    }
}
