import { Entity } from "../entities/Entity.js";

import { checkChance } from "../../utils/utils.js";

class Enemy extends Entity {
  constructor(name, maxHealth, damage, hitChance) {
    super(name, maxHealth, damage, hitChance);
  }
}

export { Enemy };
