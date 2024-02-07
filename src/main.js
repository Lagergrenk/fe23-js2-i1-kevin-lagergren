import { Elf } from "./classes/players/races/Elf.js";

import { ArcaneConstruct } from "./classes/enemies/ArcaneConstruct.js";

const construct = new ArcaneConstruct();

const elf = new Elf();

const attack = elf.attack(elf.damage);
console.log(attack);

console.log(construct);

construct.takeDamage(50);
console.log(construct);

console.log(elf);
