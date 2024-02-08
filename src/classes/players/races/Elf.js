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
    const imagePath = "../../../../assets/images/player/elf-front-facing.webp";
    super("Elf", 80, 60, 0.9, imagePath);
  }
}

export { Elf };
