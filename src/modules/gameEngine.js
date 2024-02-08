class GameEngine {
  constructor(player, enemy, updateUI) {
    this.player = player;
    this.enemy = enemy;
    this.isPlayerTurn = true;
    this.isGameOver = false;
    this.updateUI = updateUI;
  }

  startGame() {
    this.nextTurn();
  }

  nextTurn() {
    if (this.isGameOver) {
      this.endGame();
      return;
    }

    if (this.isPlayerTurn) {
      this.playerTurn();
    } else {
      setTimeout(() => this.enemyTurn(), 1000);
    }

    this.isPlayerTurn = !this.isPlayerTurn;
    setTimeout(() => this.nextTurn(), 2000);
  }

  playerTurn() {
    const damage = this.player.attack();
    this.enemy.takeDamage(damage);
    this.checkGameOver();
    this.updateUI();
  }

  enemyTurn() {
    const damage = this.enemy.attack();
    this.player.takeDamage(damage);
    this.checkGameOver();
    this.updateUI();
  }

  checkGameOver() {
    if (!this.player.isAlive() || !this.enemy.isAlive()) {
      this.isGameOver = true;
    }
  }

  endGame() {
    if (!this.player.isAlive()) {
      console.log("Game Over. Player lost.");
    } else if (!this.enemy.isAlive()) {
      console.log("Game Over. Player won!");
    }
    this.updateUI(true);
  }
}

export { GameEngine };
