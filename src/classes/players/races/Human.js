import { Player } from "../Player.js";

class Human extends Player {
  constructor() {
    const imagePath = "../../../assets/images/human-front-facing.webp";
    super("Human", 100, 60, 0.9, imagePath);
  }
}

export { Human };
