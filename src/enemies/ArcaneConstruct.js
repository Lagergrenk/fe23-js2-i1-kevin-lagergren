import { Enemy } from "./Enemy.js";

/**
 * Arcane Construct
 * Health: 150
 * Damage: 20
 * Hit Chance: 85%
 *
 * Abilities: High health
 * Weakness: None
 */

class ArcaneConstruct extends Enemy {
  constructor() {
    super("Arcane Construct", 150, 20, 0.85);
  }
}
