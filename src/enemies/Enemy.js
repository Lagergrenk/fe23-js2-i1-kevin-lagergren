import { Entity } from "../classes/Entity.js";

import { checkChance } from "../utils/utils.js";

class Enemy extends Entity {
  constructor(name, health, damage, hitChance) {
    super(name, health);
    this.damage = damage;
    this.hitChance = hitChance;
  }

  attack(target) {
    if (checkChance(this.hitChance)) {
      return this.damage;
    } else {
      return 0;
    }
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  isAlive() {
    return this.health > 0;
  }
}

export default Enemy;
