import { Player } from "../Player.js";

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
    super("Dwarf", 100, 40, 0.8, frontImagePath);
  }

  // Sturdy blow deals 1.5x damage and has a 10% less hit chance
  specialAttack() {
    return {
      damage: this.damage * 1.5,
      hitChance: this.hitChance * 0.1,
    };
  }
}

export { Dwarf };
