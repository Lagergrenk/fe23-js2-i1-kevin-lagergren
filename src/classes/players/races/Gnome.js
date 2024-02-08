import { Player } from "../Player.js";

class Gnome extends Player {
  constructor() {
    const imagePath = "../../../assets/images/gnome-front-facing.webp";
    super("Gnome", 60, 40, 0.8, imagePath);
  }
}

export { Gnome };
