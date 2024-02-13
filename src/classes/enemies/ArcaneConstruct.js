import { Enemy } from "./Enemy.js";

/**
 * Arcane Construct
 * Health: 150
 * Damage: 20
 * Hit Chance: 85%
 *
 * Abilities: High health , Arcane Explosion (30 damage when life is below 5% health)
 * Weakness: None
 */

class ArcaneConstruct extends Enemy {
  constructor() {
    const imagePath = "assets/images/enemies/arcaneconstruct-front-facing.png";
    super("Arcane Construct", 150, 20, 0.85, imagePath);
  }

  takeDamage(damage) {
    super.takeDamage(damage);

    if (this.health < this.maxHealth * 0.05) {
      attack(this.damage * 1.5);
    }
  }
}

export { ArcaneConstruct };
