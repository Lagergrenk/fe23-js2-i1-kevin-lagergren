import { Entity } from "../classes/Entity.js";

class Enemy extends Entity {
  constructor(name, health, damage, hitChance) {
    super(name, health);
    this.damage = damage;
    this.hitChance = hitChance;
  }
}

export default Enemy;
