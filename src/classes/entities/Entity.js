import { checkChance } from "../../utils/utils.js";

class Entity {
  constructor(name, maxHealth, damage, hitChance, image) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.damage = damage;
    this.hitChance = hitChance;
    this.image = image;
  }

  isAlive() {
    return this.currentHealth > 0;
  }

  attack() {
    if (checkChance(this.hitChance)) {
      return this.damage;
    } else {
      return 0;
    }
  }

  takeDamage(damage) {
    this.currentHealth -= damage;
    if (this.currentHealth < 0) {
      this.currentHealth = 0;
    }
  }
}

export { Entity };
