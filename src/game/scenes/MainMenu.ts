import {EventBus} from "../EventBus";
import {Confirm} from "../containers/Confirm";
import {Menu} from "../containers/Menu";
import {AbstractScene} from "./AbstractScene";

export class MainMenu extends AbstractScene {
    constructor() {
        super("MainMenu");
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

        const menu = new Menu(this, 512, 384, 'Main Menu', [
            {
                text: "Resume Run",
                scene: "ResumeRun",
                enabled: () => this.registry.get("runInProgress"),
            },
            {
                text: "New Run",
                scene: "NewRun",
            },
            {
                text: "Game Options",
                scene: "GameOptions",
            },
            {
                text: "Quit",
                scene: "QuitGame",
            },
        ]);

        const confirm = new Confirm(this, 512, 384, 480, 120, 'Are you sure you want to quit?');

        EventBus.emit("current-scene-ready", this);
    }
}
