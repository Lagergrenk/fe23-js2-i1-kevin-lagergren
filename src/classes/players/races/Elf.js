import { Player } from "../Player.js";

/*
 * Class representing a Elf.
 * Elf
 * maxHealth: 80
 * attack: 60
 * hitChance: 0.9
 */
class Elf extends Player {
  constructor() {
    const backImagePath =
      "../../../../assets/images/player/elf-away-facing.webp";
    const frontImagePath =
      "../../../../assets/images/player/elf-front-facing.webp";
    super("Elf", 80, 60, 0.9, frontImagePath);
  }

  // Special attack deals 2-4x damage
  specialAttack() {
    const hits = Math.floor(Math.random() * 3) + 2;
    return {
      damage: this.damage * hits,
      hitChance: this.hitChance,
    };
  }
}

export { Elf };
