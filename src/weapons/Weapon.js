class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }

  attack() {
    console.log(`Attacking with ${this.name}`);
  }
}
