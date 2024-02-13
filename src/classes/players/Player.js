import { Entity } from "../entities/Entity.js";
import { checkChance } from "../../utils/utils.js";

class Player extends Entity {
  constructor(name, maxHealth, damage, hitChance, image, backImagePath) {
    super(name, maxHealth, damage, hitChance, image);
    this.backImagePath = backImagePath;
    this.critChance = 0.2;
    this.level = 1;
    this.weapon = null;
    this.currentHealth = maxHealth;
  }

  attack() {
    let result = this.damage;

    if (checkChance(this.hitChance)) {
      if (checkChance(this.critChance)) {
        result *= 1.3;
        return {
          damage: result,
          message: `${this.name} landed a critical hit for ${result} damage!`,
        };
      } else {
        return {
          damage: result,
          message: `${this.name} landed a hit for ${result} damage!`,
        };
      }
    } else {
      result = 0;
      return { damage: result, message: `${this.name} missed!` };
    }
  }

  levelUp() {
    this.level++;
    this.maxHealth += 10;
    this.damage += 5;
    this.currentHealth = this.maxHealth;

    return {
      message: `${this.name} leveled up!`,
    };
  }

  rest() {
    if (this.currentHealth === this.maxHealth) {
      return { message: `${this.name} is already at full health.` };
    }

    this.currentHealth += 10;
    if (this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth;
    }

    return {
      message: `${this.name} rested and recovered health to ${this.currentHealth}.`,
    };
  }
}

export { Player };
