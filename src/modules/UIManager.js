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
    this.optionsContainer = document.querySelector(".options-container");
    this.playAgainContainer = document.querySelector(".play-again-container");

    this.isTyping = false;
    this.typingTimeoutId = null;
    this.messageQueue = [];
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
  showRaceAndNameInput(gameMode) {
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
    this.show(this.gameWrapper, this.optionsContainer);
    this.hide(
      this.playerSelection,
      this.playerVsContainer,
      this.raceContainer,
      this.playerImageDiv,
      this.playerNameSection,
      this.statsContainer,
      this.playAgainContainer
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

  updatePlayerInfo(playerObj, playerName) {
    document.querySelector("#player-name h1").textContent = playerName;
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

  updateEnemyInfo(enemy, enemyName = enemy.name) {
    document.querySelector("#enemy-name h1").textContent = enemyName;
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

  proccessMessageQueue() {
    if (this.messageQueue.length === 0) {
      this.isTyping = false;
      this.toggleOptionsContainer(true);
      return;
    }

    this.isTyping = true;
    this.toggleOptionsContainer(false);
    const message = this.messageQueue.shift();
    this.chatBox.textContent = "";
    let index = 0;

    const typeLetterByLetter = () => {
      if (index < message.length) {
        this.chatBox.textContent += message.charAt(index);
        index++;
        setTimeout(typeLetterByLetter, 50);
      } else {
        setTimeout(() => {
          if (this.messageQueue.length > 0) {
            this.proccessMessageQueue();
          } else {
            this.isTyping = false;
            this.toggleOptionsContainer(true);
          }
        }, 1000);
      }
    };

    typeLetterByLetter();
  }

  updateChatBoxWithMessage(message) {
    this.messageQueue.push(message);
    if (!this.isTyping) {
      this.proccessMessageQueue();
    }
  }

  toggleOptionsContainer(show) {
    if (this.playAgainContainer.style.display === "flex") {
      this.optionsContainer.style.display = "none";
    } else {
      this.optionsContainer.style.display = show ? "flex" : "none";
    }
  }

  changeStats(player) {
    const playerStats = document.querySelectorAll(".user-stats");
    playerStats[0].textContent = `Level: ${player.level}`;
    playerStats[1].textContent = `Health: ${player.maxHealth}`;
    playerStats[2].textContent = `Damage: ${player.damage}`;
    playerStats[3].textContent = `Hitchance: ${player.hitChance * 100}%`;
  }

  showPlayAgainButton() {
    this.toggleOptionsContainer(false);
    this.show(this.playAgainContainer);
  }

  changePlayerLabelForPVP(playerNumber) {
    const formSection = document.querySelector(".player-name");
    const playerNameLabel = formSection.querySelector(
      "label[for='player-name']"
    );
    playerNameLabel.textContent = `Player ${playerNumber} Name:`;
  }
  show(...elements) {
    elements.forEach((element) => (element.style.display = "flex"));
  }

  hide(...elements) {
    elements.forEach((element) => (element.style.display = "none"));
  }

  showPlayerSelectionPVP(playerNumber) {
    this.showRaceAndNameInput();
    this.changePlayerLabelForPVP(playerNumber);
  }
}

export const uiManager = new UIManager();
