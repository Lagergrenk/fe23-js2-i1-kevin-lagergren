import { Enemy } from "./Enemy.js";

/**
 * Elemental Mage
 * Health: 80
 * Damage: 30
 * Hit Chance: 90%
 *
 * Abilities: High damage
 * Weakness: Low health
 */

class ElementalMage extends Enemy {
  constructor() {
    super("Elemental Mage", 80, 30, 0.9);
  }
}
