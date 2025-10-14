// aanmaken array
const days = [
  "Maandag", // index 0
  "Dinsdag", // 1
  "Woensdag", // 2
  "Donderdag", // 3
  "Vrijdag", // 4
  "Zaterdag", // 5
  "Zondag", // 6 (7 - 1)
];

const firstDayOfTheWeek = days[0];
console.log(firstDayOfTheWeek);
console.log(days.length);
// laatste item uit array
const lastDayOfTheWeek = days[days.length - 1];
console.log(lastDayOfTheWeek);

// for ... of
for (const day of days) {
  // dit wordt 7x uitgevoerd
  console.log(`Het is ${day}`);
}

const numbers = [3, 40, 29];
let total = 0;
for (const number of numbers) {
  // DIT ZAL 3X WORDEN UITGEVOERD
  total = total + number;
  console.log(total);
}
console.log(`Het totaal is ${total}`);

numbers.push(100);
total = 0;
for (const number of numbers) {
  // DIT ZAL 4X WORDEN UITGEVOERD
  total = total + number;
  console.log(total);
}
console.log(`Het totaal is ${total}`);
