import { Enemy } from "./Enemy.js";

/**
 * Shadow Assasin
 * Health: 60
 * Damage: 40
 * Hit Chance: 95%
 *
 * Abilities: High damage, ShadowStep ( After attacking 30% chance to dodge next attack)
 * Weakness: Low health
 */

class ShadowAssasin extends Enemy {
  constructor() {
    super("Shadow Assasin", 60, 40, 0.95);
  }

  shadowStep() {
    Math.random() < 0.3 ? true : false;
  }
}

export { ShadowAssasin };
