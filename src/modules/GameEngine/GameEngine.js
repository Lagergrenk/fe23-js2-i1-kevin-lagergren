import { uiManager } from "../UIManager.js";

class GameEngine {
  constructor() {
    this.gameMode = "";
    this.isGameover = false;
  }

  resetGame() {
    this.gameMode = "";
    this.isGameover = false;
  }

  playAgain() {
    this.resetGame();
    uiManager.showInitialChoice();
    uiManager.updateChatBoxWithMessage("");
  }
}

export { GameEngine };
