import { Player } from "../Player.js";

/**
 * Class representing a Dwarf.
 * Dwarf
 * maxHealth: 100
 * attack: 40
 * hitChance: 0.8
 */

class Dwarf extends Player {
  constructor() {
    const imagePath =
      "../../../../assets/images/player/dwarf-front-facing.webp";
    super("Dwarf", 100, 40, 0.8, imagePath);
  }
}

export { Dwarf };
