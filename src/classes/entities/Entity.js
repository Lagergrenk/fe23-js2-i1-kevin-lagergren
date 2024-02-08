import { checkChance } from "../../utils/utils.js";

class Entity {
  constructor(name, maxHealth, damage, hitChance, image) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.damage = damage;
    this.hitChance = hitChance;
    this.image = image;
  }

  isAlive() {
    return this.health > 0;
  }

  attack(damage) {
    if (checkChance(this.hitChance)) {
      return damage;
    } else {
      return 0;
    }
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export { Entity };
