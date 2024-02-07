class Player extends Entity {
  constructor(name, health, mana) {
    super(name, health);
    this.mana = mana;
  }
}

export default Player;
