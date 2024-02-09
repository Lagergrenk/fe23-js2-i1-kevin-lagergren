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
    const backImagePath = "assets/images/player/gnome-away-facing.webp";
    const frontImagePath = "assets/images/player/gnome-front-facing.webp";
    super("Gnome", 60, 40, 0.8, frontImagePath);
  }

  // Special attack heals for 20 health
  specialAttack() {
    const healAmount = 20;
    this.health += healAmount;

    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
    return {
      message: "Gnome heals for 20 health",
    };
  }
}

export { Gnome };
