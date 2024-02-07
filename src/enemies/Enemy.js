import { Entity } from "../classes/Entity.js";

import { checkChance } from "../utils/utils.js";

class Enemy extends Entity {
  constructor(name, maxHealth, damage, hitChance) {
    super(name, maxHealth, damage, hitChance);
  }

  attack(target) {
    if (checkChance(this.hitChance)) {
      return this.damage;
    } else {
      return 0;
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

export default Enemy;
