import { Enemy } from "./Enemy.js";

import { checkChance } from "../utils/utils.js";

/*
 * Goblin Raider
 * Health: 50
 * Damage: 5
 * Hit Chance: 80%
 *
 * Abilities: Quick strike
 * Weakness: Low health
 *
 * Chance to hit twice: 20%
 */

class Goblin extends Enemy {
  constructor() {
    super("Goblin Raider", 50, 5, 0.8);
  }

  isHitTwice() {
    const hitTwice = checkChance(0.2);
    return hitTwice;
  }
}

export { Goblin };
