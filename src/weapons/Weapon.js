class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }

  attack() {
    return this.damage;
  }
}

export default Weapon;
