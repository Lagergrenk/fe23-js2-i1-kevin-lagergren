import { Player } from "../Player.js";
import { checkChance } from "../../../utils/utils.js";
/*
 * Class representing a Dwarf.
 * Dwarf
 * maxHealth: 100
 * attack: 40
 * hitChance: 0.8
 */

class Dwarf extends Player {
  constructor() {
    const backImagePath = "assets/images/player/dwarf-away-facing.webp";
    const frontImagePath = "assets/images/player/dwarf-front-facing.webp";
    super("Dwarf", 100, 40, 0.8, frontImagePath, backImagePath);
  }

  // Sturdy blow deals 1.5x damage and has a 10% less hit chance
  specialAttack() {
    const hit = checkChance(this.hitChance * 0.1);
    if (hit) {
      return {
        damage: this.damage * 1.5,
        message: `Special attack hits for ${this.damage * 1.5} damage!`,
      };
    }
    return {
      damage: 0,
      message: "Special attack missed!",
    };
  }
}

export { Dwarf };
