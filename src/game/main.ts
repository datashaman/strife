import {Boot} from "./scenes/Boot";
import {MainMenu} from "./scenes/MainMenu";
import {AUTO, Game} from "phaser";
import {Preloader} from "./scenes/Preloader";
import {ResumeRun} from "./scenes/run/ResumeRun.ts";
import {NewRun} from "./scenes/run/NewRun";
import {PauseRun} from "./scenes/run/PauseRun";
import {QuitRun} from "./scenes/run/QuitRun";
import {RunFailure} from "./scenes/run/RunFailure";
import {RunStats} from "./scenes/run/RunStats";
import {RunSuccess} from "./scenes/run/RunSuccess";
import {GameOptions} from "./scenes/game/GameOptions.ts";
import {QuitGame} from "./scenes/game/QuitGame.ts";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [
        Boot,
        Preloader,
        MainMenu,
        GameOptions,
        QuitGame,
        ResumeRun,
        NewRun,
        PauseRun,
        QuitRun,
        RunFailure,
        RunSuccess,
        RunStats,
    ],
};

const StartGame = (parent: string) => {
    return new Game({...config, parent});
};

export default StartGame;
