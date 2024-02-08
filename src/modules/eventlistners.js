import { Dwarf } from "../classes/players/races/Dwarf.js";
import { Elf } from "../classes/players/races/Elf.js";
import { Human } from "../classes/players/races/Human.js";
import { Gnome } from "../classes/players/races/Gnome.js";

const raceButton = document.querySelectorAll(".race-container");
const playerImage = document.querySelector("#player");

const defaultChoice = new Human();
playerImage.src = defaultChoice.image;
playerImage.alt = "Human";
changeStats(defaultChoice);

raceButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const player = playerChoice(e);
  });
});

function playerChoice(e) {
  let player;
  switch (e.target.id) {
    case "dwarf":
      player = new Dwarf();
      playerImage.src = player.image;
      playerImage.alt = "Dwarf";
      changeStats(player);
      break;
    case "elf":
      player = new Elf();
      playerImage.src = player.image;
      playerImage.alt = "Elf";
      changeStats(player);
      break;
    case "human":
      player = new Human();
      playerImage.src = player.image;
      playerImage.alt = "Human";
      changeStats(player);
      break;
    case "gnome":
      player = new Gnome();
      playerImage.src = player.image;
      playerImage.alt = "Gnome";
      changeStats(player);
      break;
    default:
      break;
  }
  return player;
}

function changeStats(player) {
  const playerStats = document.querySelectorAll(".user-stats");
  playerStats[0].textContent = `Level: ${player.level}`;
  playerStats[1].textContent = `Health: ${player.maxHealth}`;
  playerStats[2].textContent = `Damage: ${player.damage}`;
  playerStats[3].textContent = `Hitchance: ${player.hitChance * 100}%`;
}
