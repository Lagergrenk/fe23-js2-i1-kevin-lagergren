import { uiManager } from "./UIManager.js";
import { pvpGameEngine } from "./GameEngine/PVPGameEngine.js";
import { pveGameEngine } from "./GameEngine/PVEGameEngine.js";

let currentGameEngine;
let player1Race = "human"; // Default race
let player1Name = "";
let player2Name = "";
let player2Race = "human"; //Default race
let isPlayerInfoCollected = false;

function initEventListeners() {
  uiManager.showInitialChoice();
  handleGameModeSelection();
  handleRaceSelection();
  handlePlayerFormSubmission();
  handlePlayerAction();
  handlePlayAgain();
}

function handleGameModeSelection() {
  const gameModeChoices = document.querySelectorAll(".game-mode");
  gameModeChoices.forEach((button) => {
    button.addEventListener("click", (e) => {
      const gameMode = e.target.id;

      if (gameMode === "pvp") {
        currentGameEngine = pvpGameEngine;
        console.log("PVP mode selected");
        uiManager.showRaceAndNameInput();
        uiManager.changePlayerLabelForPVP("1");
        uiManager.showPlayerRacePreview("human");
      } else {
        currentGameEngine = pveGameEngine;
        console.log("PVE mode selected");
        uiManager.showRaceAndNameInput();
        uiManager.showPlayerRacePreview("human");
      }
    });
  });
}

function handlePlayerFormSubmission() {
  const playerForm = document.querySelector(".player-name form");
  playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let playerNameInput = document.querySelector("#player-name").value;

    if (currentGameEngine === pveGameEngine) {
      player1Name = playerNameInput;
      pveGameEngine.createPlayer(player1Race, player1Name);
      pveGameEngine.createComputer();
      uiManager.showGameView();
    } else if (!isPlayerInfoCollected) {
      player1Name = playerNameInput;
      isPlayerInfoCollected = true;
      uiManager.changePlayerLabelForPVP("2");
    } else {
      player2Name = playerNameInput;
      pvpGameEngine.initializePlayers(
        player1Race,
        player2Race,
        player1Name,
        player2Name
      );

      uiManager.showGameView();
    }
  });
}

function handlePlayerAction() {
  const optionsButton = document.querySelectorAll(".options-container");
  optionsButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      let playerAction = e.target.id;
      currentGameEngine.performPlayerAction(playerAction);
    });
  });
}

function handlePlayAgain() {
  const playAgainButton = document.querySelector("#play-again");
  playAgainButton.addEventListener("click", (e) => {
    currentGameEngine.playAgain();
    resetPlayerInfo();
  });
}

function handleRaceSelection() {
  const raceButtons = document.querySelectorAll(".race-button");
  raceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedRace = e.target.id;
      console.log(`Selected race ${selectedRace}`);

      uiManager.showPlayerRacePreview(selectedRace);

      if (!isPlayerInfoCollected) {
        player1Race = selectedRace;
      } else {
        player2Race = selectedRace;
      }
    });
  });
}

function resetPlayerInfo() {
  player1Name = "";
  player2Name = "";
  player1Race = "human";
  player2Race = "human";
  isPlayerInfoCollected = false;
}

export { initEventListeners };
