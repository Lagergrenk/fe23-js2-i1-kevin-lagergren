import { Entity } from "../entities/Entity.js";

class Enemy extends Entity {
  constructor(name, maxHealth, damage, hitChance, image) {
    super(name, maxHealth, damage, hitChance, image);
  }
}

export { Enemy };
