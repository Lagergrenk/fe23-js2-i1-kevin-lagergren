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
    super("Gnome", 60, 40, 0.8, frontImagePath, backImagePath);
  }

  // Special attack heals for 30 health
  specialAttack() {
    this.currentHealth += 30;
    if (this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth;
    }
    return {
      message: `${this.name} used a special attack and healed for 30 health.`,
    };
  }
}

export { Gnome };
