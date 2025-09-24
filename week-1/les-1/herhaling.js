const animal = "rode panda"; // string
const amount = 10; // number

console.log("De " + animal + " is een dier");
console.log(`De ${animal} is een dier`);

const isSmall = false; // boolean -> true / false

// voorbeeld 1
if (isSmall === true) {
  console.log("Het dier is klein");
}

if (isSmall !== true) {
  console.log("Het dier is groot");
}

// voorbeeld 2
if (isSmall === true) {
  console.log("Het dier is klein");
} else {
  console.log("Het dier is groot");
}
