import { Player } from "../Player.js";

/*
 * Class representing a Gnome.
 * Gnome
 * maxHealth: 60
 * attack: 40
 * hitChance: 0.8
 */

class Gnome extends Player {
  constructor() {
    const imagePath =
      "../../../../assets/images/player/gnome-front-facing.webp";
    super("Gnome", 60, 40, 0.8, imagePath);
  }
}

export { Gnome };
