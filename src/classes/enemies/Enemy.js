import { Entity } from "../entities/Entity.js";
import { checkChance } from "../../utils/utils.js";

class Enemy extends Entity {
  constructor(name, maxHealth, damage, hitChance, image) {
    super(name, maxHealth, damage, hitChance, image);
  }

  attack() {
    const hit = checkChance(this.hitChance);

    if (hit) {
      return {
        damage: this.damage,
        message: `${this.name} attacks for ${this.damage} damage!`,
      };
    } else {
      return {
        damage: 0,
        message: `${this.name} missed!`,
      };
    }
  }
}

export { Enemy };
