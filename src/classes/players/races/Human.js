import { Player } from "../Player.js";

class Human extends Player {
  constructor() {
    super("Human", 100, 60, 0.9);
  }
}

export { Human };
