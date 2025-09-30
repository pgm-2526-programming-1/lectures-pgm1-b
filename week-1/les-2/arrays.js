const city1 = "Amsterdam";
const city2 = "Dublin";
const city3 = "Budapest";
const city4 = "London";
const city5 = "Rome";
const city6 = "Brussel";
const city7 = "Rabat";
const city8 = "Barcelona";

console.log(`${city1} is een stad`);
console.log(`${city2} is een stad`);
console.log(`${city3} is een stad`);
console.log(`${city4} is een stad`);
console.log(`${city5} is een stad`);
console.log(`${city6} is een stad`);
console.log(`${city7} is een stad`);
console.log(`${city8} is een stad`);

console.log("==========================");

// zero index based
const cities = [
  "Amsterdam", // 0
  "Dublin", // 1
  "Budapest", // 2
  "London", // 3
  "Rome", // 4
  "Brussel", // 5
  "Rabat", // 6
  "Barcelona", // 7
]; // array

console.log(`${cities[0]} is een stad`);
console.log(`${cities[1]} is een stad`);
console.log(`${cities[2]} is een stad`);
console.log(`${cities[3]} is een stad`);
console.log(`${cities[4]} is een stad`);
console.log(`${cities[5]} is een stad`);
console.log(`${cities[6]} is een stad`);
console.log(`${cities[7]} is een stad`);

console.log("==========================");

console.log(cities.length); // 8

// element toevoegen op specifieke plek, zeer onhandig want je moet weten op welke index
cities[8] = "Kigali";
// we voegen een element toe aan de array, veel handiger, gewoon achteraan
cities.push("Parijs");

console.log(cities.length); // 10

// for ... of loop
for (const city of cities) {
  console.log(`${city} is een stad`);
}
