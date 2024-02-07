import { Entity } from "../classes/Entity.js";

class Enemy extends Entity {
  constructor(name, health) {
    super(name, health);
  }
}

export default Enemy;
