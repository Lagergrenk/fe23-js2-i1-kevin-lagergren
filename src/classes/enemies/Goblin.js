import { Enemy } from "./Enemy.js";

import { checkChance } from "../../utils/utils.js";

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
    const imagePath = "assets/images/enemies/goblin-front-facing.webp";
    super("Goblin Raider", 50, 5, 0.8, imagePath);
  }

  attack() {
    const damage = this.damage;
    const hitTwice = this.isHitEnemyTwice();
    if (hitTwice) {
      const result = damage * 2;
      return {
        damage: result,
        message: `The goblin strikes you twice for ${result} damage!`,
      };
    }
    return {
      damage: damage,
      message: `The goblin strikes you for ${damage} damage!`,
    };
  }

  isHitEnemyTwice() {
    const hitTwice = checkChance(0.2);
    return hitTwice;
  }
}

export { Goblin };
