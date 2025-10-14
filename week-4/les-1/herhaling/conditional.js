// condities (= statement dat waar of niet waar is)
console.log(10 > 2); // true
console.log(10 >= 10); // true
console.log(10 < 2); // false
console.log(10 <= 10); // true
console.log(10 === 10); // true
console.log(10 !== 10); // false

const result = 10 > 2; // result is een boolean
console.log(`De waarde is ${result}`);

console.log("Michael" === "Michael");
const name = "Naseem";
console.log(name === "Naseem"); // true
console.log(name !== "Naseem"); // false
console.log(name === "Filip"); // false

const isTuesday = true;

if (isTuesday) {
  console.log("Het is vandaag dinsdag");
} else {
  console.log("Het is vandaag NIET dinsdag");
}

console.log("---------------------------------");

const day = "zaterdag";
const temperature = 26;

// Suenna wil naar de zee; maar enkel op
// zaterdag EN enkel als het meer dan 25 graden is
// && = EN
if (day === "zaterdag" && temperature > 25) {
  console.log("Suenna gaat naar de zee");
} else {
  console.log("Suenna gaat niet naar de zee");
}

// Thorsten wil ook naar de zee; maar enkel op zondag;
// OF een andere dag indien het meer dan 25 graden
// || = OF
if (day === "zondag" || temperature > 25) {
  console.log("Thorsten gaat naar de zee");
} else {
  console.log("Thorsten gaat niet naar de zee");
}
