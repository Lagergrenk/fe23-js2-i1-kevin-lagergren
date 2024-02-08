import { Entity } from "../entities/Entity.js";
import { checkChance } from "../../utils/utils.js";

class Player extends Entity {
  constructor(name, maxHealth, damage, hitChance, image) {
    super(name, maxHealth, damage, hitChance, image);
    this.critChance = 0.2;
    this.level = 1;
    this.weapon = null;
  }

  attack(damage) {
    if (checkChance(this.hitChance)) {
      if (checkChance(this.critChance)) {
        return damage * 1.5;
      } else {
        return damage;
      }
    } else {
      return 0;
    }
  }

  levelUp() {
    this.level++;
    this.maxHealth += 10;
    this.damage += 5;
  }

  rest() {
    this.health = this.maxHealth;
  }
}

export { Player };
