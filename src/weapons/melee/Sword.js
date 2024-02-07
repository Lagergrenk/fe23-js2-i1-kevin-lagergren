import { Weapon } from "../Weapon.js";

/*
Sword
Critical hit chance: 30%
Critical hit damage: 2x
Bleed chance: 10%
 */

class Sword extends Weapon {
  constructor(name, damage) {
    super(name, damage);
  }

  attack() {
    const isCritical = Math.random() < 0.3;
    const actualDamage = isCritical ? this.damage * 2 : this.damage;
    return actualDamage;
  }

  isBleed() {
    const isBleed = Math.random() < 0.1;
    return isBleed;
  }
}

export default Sword;
