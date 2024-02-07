import { Enemy } from "./Enemy.js";

/**
 * Forest Troll
 * Health: 200
 * Damage: 25
 * Hit Chance: 75%
 *
 * Abilities: High health
 * Weakness: Low hit chance
 */

class ForestTroll extends Enemy {
  constructor() {
    super("Forest Troll", 200, 25, 0.75);
  }
}
