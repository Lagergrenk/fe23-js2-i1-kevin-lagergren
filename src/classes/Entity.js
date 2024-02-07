class Entity {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  isAlive() {
    return this.health > 0;
  }

  getHealth() {
    return this.health;
  }

  attack(damage, target) {
    target.health -= damage;
  }
}
