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
    const imagePath =
      "../../../../assets/images/player/human-front-facing.webp";
    super("Human", 100, 60, 0.9, imagePath);
  }
}

export { Human };
