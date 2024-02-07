class Entity {
  constructor(name, maxHealth, damage, hitChance) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.damage = damage;
    this.hitChance = hitChance;
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

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
