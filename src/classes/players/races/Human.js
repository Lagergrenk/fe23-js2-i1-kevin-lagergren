import { Player } from "../Player.js";

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
    super("Human", 100, 60, 0.9, frontImagePath);
  }

  // Special attack deals 1.5x damage and has a 15% higher hit chance
  specialAttack() {
    return {
      damage: this.damage * 1.5,
      hitChance: this.hitChance + 0.15,
    };
  }
}

export { Human };
