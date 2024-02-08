class GameEngine {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.isPlayerTurn = true;
    this.isGameOver = false;
  }

  startGame() {
    this.gameLoop();
  }

  gameLoop() {
    while (!this.isGameOver) {
      if (this.isPlayerTurn) {
        this.playerTurn();
      } else {
        this.enemyTurn();
      }
      this.checkGameOver();
      this.isPlayerTurn = !this.isPlayerTurn;
    }
  }

  // TODO : Implement the playerTurn (ATTACK, REST, EQUIP WEAPON)
  playerTurn() {
    const damage = this.player.attack(this.player.damage);
    this.enemy.takeDamage(damage);
  }

  // Simple enemy turn, just attacks the player
  enemyTurn() {
    const damage = this.enemy.attack(this.enemy.damage);
    if (damage > 0) {
      this.player.takeDamage(damage);
    } else {
      //TODO: Implement the enemy missed message
    }
  }

  checkGameOver() {
    if (!this.player.isAlive()) {
      this.isGameOver = true;
    } else if (!this.enemy.isAlive()) {
      this.isGameOver = true;
    }
  }
}

export { GameEngine };
