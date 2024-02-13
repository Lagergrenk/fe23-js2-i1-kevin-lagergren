import { Player } from "../Player.js";
import { checkChance } from "../../../utils/utils.js";

/*
 * Class representing a Elf.
 * Elf
 * maxHealth: 80
 * attack: 60
 * hitChance: 0.9
 */
class Elf extends Player {
  constructor() {
    const backImagePath = "assets/images/player/elf-away-facing.webp";
    const frontImagePath = "assets/images/player/elf-front-facing.webp";
    super("Elf", 80, 60, 0.9, frontImagePath, backImagePath);
  }

  // Special attack deals 2-4x damage
  specialAttack() {
    const hit = checkChance(this.hitChance);
    if (hit) {
      const hits = Math.floor(Math.random() * 3) + 2;
      return {
        damage: this.damage * hits,
        message: `Special attack hits for ${this.damage * hits} damage!`,
      };
    }

    return {
      damage: 0,
      message: "Special attack missed!",
    };
  }
}

export { Elf };
