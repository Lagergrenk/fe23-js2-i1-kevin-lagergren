import { Entity } from "../entities/Entity.js";

class Player extends Entity {
  constructor(name, maxHealth, damage, hitChance) {
    super(name, maxHealth, damage, hitChance);
  }
}

export { Player };
