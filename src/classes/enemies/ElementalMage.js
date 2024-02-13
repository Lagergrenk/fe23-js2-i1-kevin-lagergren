import { Enemy } from "./Enemy.js";
import { checkChance } from "../../utils/utils.js";

/**
 * Elemental Mage
 * Health: 80
 * Damage: 30
 * Hit Chance: 90%
 *
 * Abilities: High damage, Elemental Shield (30% chance to block 50% of incoming damage)
 * Weakness: Low health
 */

class ElementalMage extends Enemy {
  constructor() {
    const imagePath = "assets/images/enemies/elementalmage-front-facing.png";
    super("Elemental Mage", 80, 30, 0.9, imagePath);
  }

  takeDamage(damage) {
    super.takeDamage(damage);

    if (checkChance(0.3)) {
      return damage * 0.5;
    }
  }
}

export { ElementalMage };
