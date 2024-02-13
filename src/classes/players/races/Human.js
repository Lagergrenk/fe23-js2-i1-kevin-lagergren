import { Player } from "../Player.js";
import { checkChance } from "../../../utils/utils.js";
/*
 * Class representing a Human.
 * Human
 * maxHealth: 100
 * attack: 60
 * hitChance: 0.9
 */

class Human extends Player {
  constructor() {
    const backImagePath = "assets/images/player/human-away-facing.webp";
    const frontImagePath = "assets/images/player/human-front-facing.webp";
    super("Human", 100, 60, 0.9, frontImagePath, backImagePath);
  }

  // Special attack deals 1.5x damage and has a 15% higher hit chance
  specialAttack() {
    const hit = checkChance(this.hitChance + 0.15);
    if (hit) {
      return {
        damage: this.damage * 1.5,
        message: `Special attack hits for ${this.damage * 1.5} damage!`,
      };
    }
    return {
      message: "Special attack missed!",
    };
  }
}

export { Human };
