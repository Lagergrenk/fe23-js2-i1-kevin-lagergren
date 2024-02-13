import { uiManager } from "../UIManager.js";

class GameEngine {
  constructor() {
    this.isGameover = false;
    this.gameMode = null;
  }

  setGameMode(mode) {
    this.gameMode = mode;
  }

  resetGame() {
    this.player = null;
    this.enemy = null;
    this.isPlayersTurn = true;
    this.isGameover = false;
  }

  playAgain() {
    this.resetGame();
    uiManager.showRaceAndNameInput();
  }
}

export { GameEngine };
