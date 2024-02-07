import { Weapon } from "../Weapon.js";

class LightningStrike extends Weapon {
  constructor(damage) {
    super("Lightning Strike", damage);
  }
}

export default LightningStrike;
