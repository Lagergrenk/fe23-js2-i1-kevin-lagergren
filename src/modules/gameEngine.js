import { Human, Elf, Dwarf, Gnome } from "../classes/players/races/index.js";
import {
  Goblin,
  ForestTroll,
  ArcaneConstruct,
  ElementalMage,
  ShadowAssasin,
  UndeadWarrior,
} from "../classes/enemies/index.js";
import { uiManager } from "./UIManager.js";

class GameEngine {
  constructor() {
    this.player = null;
    this.enemy = null;
    this.isPlayersTurn = true;
    this.isGameover = false;
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

  createEnemy() {
    if (this.player.level < 5) {
      const enemy = this.randomEnemy();
      this.enemy = enemy;
    }
    uiManager.updateEnemyInfo(this.enemy);
    uiManager.updateEnemyForBattle(this.enemy);
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
      if (!this.enemy.isAlive()) {
        this.isGameover = true;
        uiManager.updateChatBoxWithMessage(
          `You have defeated ${this.enemy.name}!`
        );
        gameEngine.player.levelUp();
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
      uiManager.updateChatBoxWithMessage(`${this.enemy.name}'s turn...`);
      this.performEnemyAction();
    }, 2000);
  }

  performAttack() {
    const result = this.player.attack();
    this.enemy.takeDamage(result.damage);
    uiManager.updateEnemyInfo(this.enemy);
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
      this.enemy.takeDamage(result.damage);
      uiManager.updateEnemyInfo(this.enemy);
      uiManager.updateChatBoxWithMessage(result.message);
    } else if ("heal" in result) {
      uiManager.updatePlayerInfo(this.player);
      uiManager.updateChatBoxWithMessage(result.message);
    }
  }

  performEnemyAction() {
    if (this.isGameover) return;

    const result = this.enemy.attack();
    this.player.takeDamage(result.damage);
    uiManager.updatePlayerInfo(this.player);
    uiManager.updateChatBoxWithMessage(result.message);

    setTimeout(() => {
      if (!this.enemy.isAlive() || !this.player.isAlive()) {
        this.isGameover = true;
        uiManager.updateChatBoxWithMessage("Game Over");
      } else {
        this.isPlayersTurn = true;
        uiManager.updateChatBoxWithMessage(`${this.player.name}'s turn...`);
      }
    }, 2000);
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

const gameEngine = new GameEngine();
export { gameEngine };
