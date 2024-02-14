import { Human, Elf, Gnome, Dwarf } from "../../classes/players/races/index.js";
import { GameEngine } from "./GameEngine.js";
import { uiManager } from "../UIManager.js";

class PVPGameEngine extends GameEngine {
  constructor() {
    super();
    this.player1 = null;
    this.player2 = null;
    this.isPlayer1sTurn = true;
    this.player1Name = "";
    this.player2Name = "";
  }

  initializePlayers(player1Race, player2Race, player1Name, player2Name) {
    this.player1 = this.createPlayer(player1Race, player1Name);
    this.player2 = this.createPlayer(player2Race, player2Name);

    this.player1Name =
      player1Name.charAt(0).toUpperCase() + player1Name.slice(1);
    this.player2Name =
      player2Name.charAt(0).toUpperCase() + player2Name.slice(1);

    uiManager.updatePlayerInfo(this.player1);
    uiManager.updateEnemyInfo(this.player2);

    this.startGame();
  }

  createPlayer(selectedRace, name) {
    const raceClassMap = { human: Human, elf: Elf, gnome: Gnome, dwarf: Dwarf };
    const raceClass = raceClassMap[selectedRace];
    if (raceClass) {
      return new raceClass(name);
    } else {
      console.error("Invalid race selected:", selectedRace);
    }
  }

  startGame() {
    uiManager.showGameView();
    uiManager.updateChatBoxWithMessage(`${this.player1Name}'s turn...`);
    uiManager.updatePlayerInfo(this.player1, this.player1Name);
    uiManager.updatePlayerForBattle(this.player1);
    uiManager.updateEnemyInfo(this.player2, this.player2Name);
    uiManager.updateEnemyForBattle(this.player2);
  }

  performPlayerAction(action) {
    const player = this.isPlayer1sTurn ? this.player1 : this.player2;
    if (this.isGameover) return;

    console.log(this.player1.isAlive(), this.player2.isAlive());

    switch (action) {
      case "attack":
        this.performAttack(player);
        break;
      case "rest":
        this.performRest(player);
        break;
      case "special-attack":
        this.performSpecialAttack(player);
        break;
      default:
        break;
    }
    this.checkGameOver();

    if (!this.isGameover) {
      this.isPlayer1sTurn = !this.isPlayer1sTurn;

      const nextPlayerName = this.isPlayer1sTurn
        ? this.player1Name
        : this.player2Name;
      uiManager.updateChatBoxWithMessage(`${nextPlayerName}'s turn...`);
    }
  }

  performAttack(player) {
    const opponent = player === this.player1 ? this.player2 : this.player1;
    const result = player.attack();
    opponent.takeDamage(result.damage);
    if (opponent === this.player1) {
      uiManager.updatePlayerInfo(opponent, this.player1Name);
    } else {
      uiManager.updateEnemyInfo(opponent, this.player2Name);
    }
    uiManager.updateChatBoxWithMessage(result.message);
  }

  performRest(player) {
    const result = player.rest();
    uiManager.updateChatBoxWithMessage(result.message);
    uiManager.updatePlayerInfo(this.player1, this.player1Name);
    uiManager.updateEnemyInfo(this.player2, this.player2Name);
  }

  performSpecialAttack(player) {
    const opponent = player === this.player1 ? this.player2 : this.player1;
    const result = player.specialAttack();
    opponent.takeDamage(result.damage);
    if (opponent === this.player1) {
      uiManager.updatePlayerInfo(opponent, this.player1Name);
    } else {
      uiManager.updateEnemyInfo(opponent, this.player2Name);
    }
    uiManager.updateChatBoxWithMessage(result.message);
  }

  checkGameOver() {
    if (!this.player1.isAlive() || !this.player2.isAlive()) {
      this.endGame();
    } else {
      console.log("Game is still going!");
    }
  }

  endGame() {
    this.isGameover = true;
    const message = !this.player1.isAlive()
      ? `${this.player1Name} has been defeated! ${this.player2Name} wins!`
      : `${this.player2Name} has been defeated! ${this.player1Name} wins!`;
    uiManager.updateChatBoxWithMessage(message);
    uiManager.showPlayAgainButton();
  }
}

const pvpGameEngine = new PVPGameEngine();
export { pvpGameEngine };
