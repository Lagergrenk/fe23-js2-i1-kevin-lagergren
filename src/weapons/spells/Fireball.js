import { Weapon } from "../Weapon.js";

/**
 * Fireball
 * Burn chance: 30%
 */
class Fireball extends Weapon {
  constructor(damage) {
    super("Fireball", damage);
  }

  attack() {
    const isBurned = this.isBurned();
    const actualDamage = isBurned ? this.damage + 2 : this.damage;
    return actualDamage;
  }

  isBurned() {
    const isBurned = Math.random() < 0.3;
    return isBurned;
  }
}

export default Fireball;
