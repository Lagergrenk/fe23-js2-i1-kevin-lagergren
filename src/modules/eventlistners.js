import { uiManager } from "./UIManager.js";
import { gameEngine } from "./gameEngine.js";

let gameMode = "";
let selectedRace = "";
let playerName = "";

function initEventListeners() {
  uiManager.showInitialChoice();
  const gameModeChoices = document.querySelectorAll(
    ".one-player-or-two-player"
  );

  gameModeChoices.forEach((button) => {
    button.addEventListener("click", (e) => {
      gameMode = e.target.id;

      if (gameMode == "pvp") {
        console.log("not implemented yet");
      } else {
        uiManager.showRaceAndNameInput();
        // Default preview
        uiManager.showPlayerRacePreview("human");
      }
    });
  });

  const raceButtons = document.querySelectorAll(".race-button");
  raceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      selectedRace = e.target.id;
      uiManager.showPlayerRacePreview(selectedRace);
    });
  });

  const playerForm = document.querySelector(".player-name form");
  playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    playerName = document.querySelector("#player-name").value;
    document.querySelector("#player-name h1").textContent = playerName;
    gameEngine.createPlayer(selectedRace);
    gameEngine.createEnemy();
    uiManager.showGameView();
  });

  const optionsButton = document.querySelectorAll(".options-container");
  optionsButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      let playerAction = e.target.id;
      gameEngine.performPlayerAction(playerAction);
    });
  });

  const playAgainButton = document.querySelector("#play-again");
  playAgainButton.addEventListener("click", (e) => {
    gameEngine.resetGame();
    uiManager.showInitialChoice();
  });
}

export { initEventListeners };
