import { Human, Dwarf, Elf, Gnome } from "../classes/players/races/index.js";

class UIManager {
  constructor() {
    this.playerSelection = document.querySelector(".player-selection");
    this.playerVsContainer = document.querySelector(".player-vs-container");
    this.raceContainer = document.querySelector(".race-container");
    this.playerImageDiv = document.querySelector(".player-image");
    this.playerNameSection = document.querySelector(".player-name");
    this.statsContainer = document.querySelector(".stats-container");
    this.gameWrapper = document.querySelector(".game-wrapper");
    this.playerImage = document.querySelector("#player");
    this.chatBox = document.querySelector(".chat-message");

    this.isTyping = false;
    this.typingTimeoutId = null;
  }

  showInitialChoice() {
    this.playerSelection.style.display = "grid";
    this.show(this.playerVsContainer);
    this.hide(
      this.raceContainer,
      this.playerImageDiv,
      this.playerNameSection,
      this.statsContainer,
      this.gameWrapper
    );
  }
  showRaceAndNameInput() {
    this.playerSelection.style.display = "grid";
    this.show(
      this.raceContainer,
      this.playerImageDiv,
      this.playerNameSection,
      this.statsContainer
    );
    this.hide(this.playerVsContainer, this.gameWrapper);
  }
  showGameView() {
    this.show(this.gameWrapper);
    this.hide(
      this.playerSelection,
      this.playerVsContainer,
      this.raceContainer,
      this.playerImageDiv,
      this.playerNameSection,
      this.statsContainer
    );
  }
  showPlayerRacePreview(selectedRace) {
    let player;
    switch (selectedRace) {
      case "dwarf":
        player = new Dwarf();
        break;
      case "elf":
        player = new Elf();
        break;
      case "gnome":
        player = new Gnome();
        break;
      case "human":
        player = new Human();
        break;
      default:
        console.error("Invalid race selected");
        return;
    }
    if (player) {
      this.playerImage.src = player.image;
      this.playerImage.alt = selectedRace;
      this.changeStats(player);
    }
  }

  updatePlayerInfo(playerObj) {
    document.querySelector(
      "#player-health"
    ).textContent = `${playerObj.currentHealth}/${playerObj.maxHealth}`;
    const healthBar = document.querySelector("#player-health-bar");
    healthBar.value = playerObj.currentHealth;
    healthBar.max = playerObj.maxHealth;
  }
  updatePlayerForBattle(player) {
    const playerSprite = document.querySelector("#player-sprite-img");
    playerSprite.src = `${player.backImagePath}`;
  }

  updateEnemyInfo(enemy) {
    document.querySelector("#enemy-name h1").textContent = enemy.name;
    document.querySelector(
      "#enemy-health"
    ).textContent = `${enemy.currentHealth}/${enemy.maxHealth}`;
    const healthbar = document.querySelector("#enemy-health-bar");
    healthbar.value = enemy.currentHealth;
    healthbar.max = enemy.maxHealth;
  }

  updateEnemyForBattle(enemy) {
    const enemySprite = document.querySelector("#enemy-sprite-img");
    enemySprite.src = enemy.image;
  }

  updateChatBoxWithMessage(message) {
    const chatBox = document.querySelector(".chat-message");
    chatBox.textContent = "";

    if (this.isTyping && this.typingTimeoutId) {
      clearTimeout(this.typingTimeoutId);
      chatBox.textContent = "";
    }

    this.isTyping = true;
    let index = 0;

    const typeLetterByLetter = () => {
      if (index < message.length) {
        chatBox.textContent += message.charAt(index);
        index++;
        this.typingTimeoutId = setTimeout(typeLetterByLetter, 50);
      } else {
        this.isTyping = false;
      }
    };

    typeLetterByLetter();
  }

  changeStats(player) {
    const playerStats = document.querySelectorAll(".user-stats");
    playerStats[0].textContent = `Level: ${player.level}`;
    playerStats[1].textContent = `Health: ${player.maxHealth}`;
    playerStats[2].textContent = `Damage: ${player.damage}`;
    playerStats[3].textContent = `Hitchance: ${player.hitChance * 100}%`;
  }

  showPlayAgainButton() {
    const playAgainContainer = document.querySelector(".play-again-container");
    const optionsContainer = document.querySelector(".options-container");
    this.show(playAgainContainer);
    this.hide(optionsContainer);
  }
  show(...elements) {
    elements.forEach((element) => (element.style.display = "flex"));
  }

  hide(...elements) {
    elements.forEach((element) => (element.style.display = "none"));
  }
}

export const uiManager = new UIManager();
