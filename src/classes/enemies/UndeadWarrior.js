import { Enemy } from "./Enemy.js";

import { checkChance } from "../../utils/utils.js";

/**
 * Undead Warrior
 * Health: 120
 * Damage: 10
 * Hit Chance: 50%
 *
 * Abilities: High health, Undead resilience (30% chance to heal 30 health when below 50% health)
 * Weakness: High miss chance
 *
 * Chance to stun: 10%
 */

class UndeadWarrior extends Enemy {
  constructor() {
    const imagePath = "assets/images/enemies/undeadwarrior-front-facing.webp";
    super("Undead Warrior", 120, 10, 0.5, imagePath);
  }

  takeDamage(damage) {
    super.takeDamage(damage);

    if (this.health < this.maxHealth * 0.5) {
      if (checkChance(0.3)) {
        this.health += 30;
      }
    }
  }
}

export { UndeadWarrior };
