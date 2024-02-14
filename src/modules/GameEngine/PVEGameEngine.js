import { uiManager } from "../UIManager.js";
import { GameEngine } from "./GameEngine.js";
import {
  Goblin,
  ForestTroll,
  ArcaneConstruct,
  ElementalMage,
  ShadowAssasin,
  UndeadWarrior,
} from "../../classes/enemies/index.js";
import { Human, Dwarf, Elf, Gnome } from "../../classes/players/races/index.js";

class PVEGameEngine extends GameEngine {
  constructor() {
    super();
    this.player = null;
    this.computer = null;
    this.isPlayersTurn = true;
    this.playerName = "";
  }

  createPlayer(selectedRace, playerName) {
    this.playerName = playerName;
    const raceClassMap = { human: Human, dwarf: Dwarf, elf: Elf, gnome: Gnome };
    const RaceClass = raceClassMap[selectedRace];
    if (RaceClass) {
      this.player = new RaceClass(playerName);
      uiManager.updatePlayerInfo(this.player, this.playerName);
      uiManager.updatePlayerForBattle(this.player);
    } else {
      console.error("Invalid race selected:", selectedRace);
    }
  }

  randomEnemy() {
    const enemies = [
      new Goblin(),
      new ForestTroll(),
      new ArcaneConstruct(),
      new ElementalMage(),
      new ShadowAssasin(),
      new UndeadWarrior(),
    ];
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
  }

  createComputer() {
    this.computer = this.randomEnemy();
    this.computer;
    uiManager.updateEnemyInfo(this.computer);
    uiManager.updateEnemyForBattle(this.computer);
  }

  performPlayerAction(playerAction) {
    if (this.isActionPrevented()) return;

    switch (playerAction) {
      case "attack":
        this.performAttack();
        break;
      case "rest":
        this.performRest();
        break;
      case "special-attack":
        this.performSpecialAttack();
        break;
      default:
        break;
    }
    this.handleTurnEnd();
  }

  performAttack() {
    const result = this.player.attack();
    this.computer.takeDamage(result.damage);
    uiManager.updateEnemyInfo(this.computer);
    uiManager.updateChatBoxWithMessage(result.message);
  }

  performRest() {
    const result = this.player.rest();
    uiManager.updatePlayerInfo(this.player, this.playerName);
    uiManager.updateChatBoxWithMessage(result.message);
  }

  performSpecialAttack() {
    const result = this.player.specialAttack();
    if ("damage" in result) {
      this.computer.takeDamage(result.damage);
      uiManager.updateEnemyInfo(this.computer);
    }
    uiManager.updateChatBoxWithMessage(result.message);
  }

  performEnemyAction() {
    if (this.isGameover) return;

    const result = this.computer.attack();
    uiManager.updateChatBoxWithMessage(result.message);
    this.player.takeDamage(result.damage);
    uiManager.updatePlayerInfo(this.player, this.playerName);

    this.handleTurnEnd();
  }

  endGame() {
    this.isGameover = true;
    const message = !this.player.isAlive()
      ? "Game Over, you have been defeated!"
      : `You have defeated ${this.computer.name}!`;
    uiManager.updateChatBoxWithMessage(message);
    if (this.player.isAlive()) {
      this.player.levelUp();
      uiManager.updatePlayerInfo(this.player, this.playerName);
    }
    uiManager.showPlayAgainButton();
  }

  switchTurns() {
    this.isPlayersTurn = !this.isPlayersTurn;
    const nextTurnMessage = this.isPlayersTurn
      ? `${this.player.name}'s turn...`
      : `${this.computer.name}'s turn...`;
    uiManager.updateChatBoxWithMessage(nextTurnMessage);

    if (!this.isPlayersTurn) {
      setTimeout(() => {
        this.performEnemyAction();
      }, 2000);
    }
  }

  isActionPrevented() {
    return this.isGameover || !this.isPlayersTurn || uiManager.isTyping;
  }

  handleTurnEnd() {
    setTimeout(() => {
      if (!this.computer.isAlive() || !this.player.isAlive()) {
        this.endGame();
      } else {
        this.switchTurns();
      }
    }, 2000);
  }
}

const pveGameEngine = new PVEGameEngine();
export { pveGameEngine };
