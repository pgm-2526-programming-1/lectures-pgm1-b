const currentCourse = "Programming 1";

// het is Programming 1 of het is niet Programming 1;
if (currentCourse === "Programming 1") {
  console.log("Het is Programming 1");
} else {
  console.log("Het is NIET Programming 1");
}

if (currentCourse !== "Programming 1") {
  // !== -> NIET
  console.log("Het vak is NIET Programming 1");
}

console.log(currentCourse);
console.log(currentCourse === "Programming 1");
console.log(3 < 2);

/*
Logical operators
&& (AND) -> Beide voorwaarden moeten true zijn 
|| (OR) -> 1 van de voorwaarden is true 
! (NOT) -> Omgekeerde waarde 
*/
const age = 17; // number
const hasLicense = true; // boolean

if (age >= 18 && hasLicense === true) {
  console.log("Je mag autorijden");
} else {
  console.log("Je mag niet autorijden");
}

// OR
const hasCoat = false;
const hasUmbrella = true;

// if (hasCoat === true || hasUmbrella === true) {
if (hasCoat || hasUmbrella) {
  console.log("Je bent klaar voor de regen");
} else {
  console.log("Je bent NIET klaar voor de regen");
}

const isFinished = true;
if (!isFinished) {
  console.log("De les is niet gedaan");
} else {
  console.log("De les is gedaan");
}
