import Weapon from "../Weapon.js";

/*
Axe
Critical hit chance: 20%
Critical hit damage: 2x
Stunned chance: 10%
*/

class Axe extends Weapon {
  constructor(name, damage) {
    super(name, damage);
  }

  attack() {
    const isCritical = Math.random() < 0.2;
    const actualDamage = isCritical ? this.damage * 2 : this.damage;
    return actualDamage;
  }

  stun() {
    const isStunned = Math.random() < 0.1;
    return isStunned;
  }
}

export default Axe;
