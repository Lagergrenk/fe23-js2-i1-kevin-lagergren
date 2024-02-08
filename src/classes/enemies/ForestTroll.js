import { Enemy } from "./Enemy.js";

/**
 * Forest Troll
 * Health: 200
 * Damage: 25
 * Hit Chance: 75%
 *
 * Abilities: High health Regeneration(10 health per turn)
 * Weakness: Low hit chance
 */

class ForestTroll extends Enemy {
  constructor() {
    const imagePath =
      "../../../assets/images/enemies/forest-troll-front-facing.webp";
    super("Forest Troll", 200, 25, 0.75, imagePath);
  }

  regeneration() {
    const regen = 10;
    this.health += regen;
    return regen;
  }
}

export { ForestTroll };
