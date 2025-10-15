// for-loop met een teller
// gebruik: wanneer je iets x aantal keer wil doen
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// vroeger: arrays met for-loop
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log("-----------------------");

// while loop -> minstens 0x uitgevoerd
let index = 0;
while (index > 10) {
  index = index + 2;
  console.log(index);
}

// do...while -> minstens 1x uitvoeren
do {
  console.log(index);
  index = index + 1;
} while (index < 10);

function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
const pin = 32;
let guess;
do {
  guess = generateRandomNumber(100);
  console.log(guess);
} while (pin !== guess);
