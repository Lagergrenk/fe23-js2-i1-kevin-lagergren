import { Player } from "../Player.js";

class Elf extends Player {
  constructor() {
    const imagePath = "../../../assets/images/elf-front-facing.webp";
    super("Elf", 80, 60, 0.9, imagePath);
  }
}

export { Elf };
