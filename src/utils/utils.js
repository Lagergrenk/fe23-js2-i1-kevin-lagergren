function checkChance(chance) {
  const checkChance = Math.random() < chance;
  return checkChance;
}

export { checkChance };
