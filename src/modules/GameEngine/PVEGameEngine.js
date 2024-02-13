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
  }

  createPlayer(selectedRace, playerName) {
    const raceClassMap = {
      human: Human,
      dwarf: Dwarf,
      elf: Elf,
      gnome: Gnome,
    };

    const RaceClass = raceClassMap[selectedRace];
    if (RaceClass) {
      this.player = new RaceClass(playerName);
      uiManager.updatePlayerInfo(this.player, playerName);
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
    if (this.player.level < 5) {
      const computer = this.randomEnemy();
      this.computer = computer;
    }
    uiManager.updateEnemyInfo(this.computer);
    uiManager.updateEnemyForBattle(this.computer);
  }

  performPlayerAction(playerAction) {
    if (this.isGameover || !this.isPlayersTurn || uiManager.isTyping) return;

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
    setTimeout(() => {
      if (!this.computer.isAlive()) {
        this.isGameover = true;
        uiManager.updateChatBoxWithMessage(
          `You have defeated ${this.computer.name}!`
        );
        this.player.levelUp();
        uiManager.updatePlayerInfo(this.player);
        uiManager.showPlayAgainButton();
        return;
      }
      if (!this.player.isAlive()) {
        this.isGameover = true;
        uiManager.updateChatBoxWithMessage(
          `Game Over, you have been defeated!`
        );
        uiManager.showPlayAgainButton();
        return;
      }

      this.isPlayersTurn = false;
      uiManager.updateChatBoxWithMessage(`${this.computer.name}'s turn...`);
      this.performEnemyAction();
    }, 2000);
  }
  performAttack() {
    const result = this.player.attack();
    this.computer.takeDamage(result.damage);
    uiManager.updateEnemyInfo(this.computer);
    uiManager.updateChatBoxWithMessage(result.message);
  }

  performRest() {
    const result = this.player.rest();
    uiManager.updatePlayerInfo(this.player);
    uiManager.updateChatBoxWithMessage(result.message);
  }
  performSpecialAttack() {
    const result = this.player.specialAttack();
    if ("damage" in result) {
      this.computer.takeDamage(result.damage);
      uiManager.updateEnemyInfo(this.computer);
      uiManager.updateChatBoxWithMessage(result.message);
    } else if ("heal" in result) {
      uiManager.updatePlayerInfo(this.player);
      uiManager.updateChatBoxWithMessage(result.message);
    }
  }

  performEnemyAction() {
    if (this.isGameover) return;

    const result = this.computer.attack();
    this.player.takeDamage(result.damage);
    uiManager.updatePlayerInfo(this.player);
    uiManager.updateChatBoxWithMessage(result.message);

    setTimeout(() => {
      if (!this.computer.isAlive() || !this.player.isAlive()) {
        this.isGameover = true;
        uiManager.updateChatBoxWithMessage("Game Over");
      } else {
        this.isPlayersTurn = true;
        uiManager.updateChatBoxWithMessage(`${this.player.name}'s turn...`);
      }
    }, 2000);
  }
}

const pveGameEngine = new PVEGameEngine();
export { pveGameEngine };
