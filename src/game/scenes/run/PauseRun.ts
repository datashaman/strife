import {EventBus} from "../../EventBus";
import {Menu} from "../../containers/Menu";
import {AbstractScene} from "../AbstractScene";

export class PauseRun extends AbstractScene {
    constructor() {
        super("PauseRun");
    }

    create() {
        this.createBackgroundGradient(
            512,
            384,
            1024,
            768,
            0x0d47a1,
            0x2e8b57,
            16,
        );
        this.createBackgroundGradient(
            512,
            576,
            1024,
            384,
            0x22cc33,
            0x4a2e17,
            32,
        );

        const menu = new Menu(this, 512, 384, 'Run Paused', [
            {
                text: "Resume Run",
                scene: "ResumeRun",
            },
            {
                text: "Game Options",
                scene: "GameOptions",
            },
            {
                text: "Quit Run",
                scene: "QuitRun",
            },
        ]);

        EventBus.emit("current-scene-ready", this);
    }
}
