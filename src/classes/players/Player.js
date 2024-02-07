import { Entity } from "../entities/Entity.js";
import { checkChance } from "../../utils/utils.js";

class Player extends Entity {
  constructor(name, maxHealth, damage, hitChance) {
    super(name, maxHealth, damage, hitChance);
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

  equipWeapon(weapon) {
    if (this.weapon !== null) {
      return;
    } else {
      this.weapon = weapon;
      this.damage += weapon.damage;
    }
  }
}

export { Player };
