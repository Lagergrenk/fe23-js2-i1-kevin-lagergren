import { uiManager } from "../UIManager.js";

class GameEngine {
  constructor() {
    this.isGameover = false;
  }

  resetGame() {
    this.isGameover = false;
  }

  playAgain() {
    this.resetGame();
    uiManager.showInitialChoice();
    uiManager.updateChatBoxWithMessage("");
  }
}

export { GameEngine };
