function checkChance(chance) {
  const checkChance = Math.random() < chance;
  return checkChance;
}

function changeStats(playerObject) {
  const playerStats = document.querySelectorAll(".user-stats");
  playerStats[0].textContent = `Level: ${playerObject.level}`;
  playerStats[1].textContent = `Health: ${playerObject.maxHealth}`;
  playerStats[2].textContent = `Damage: ${playerObject.damage}`;
  playerStats[3].textContent = `Hitchance: ${playerObject.hitChance * 100}%`;
}

export { checkChance, changeStats };
