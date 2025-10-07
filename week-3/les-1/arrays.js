const streets = ["Sesamstraat", "Stationstraat", "Leeuwstraat", "Overpoortstraat"];

// wat is het item op index 1?
console.log(streets[1]);

// omgekeerd -> wat is de index van Leeuwstraat?
const index = streets.indexOf("Leeuwstraat"); // 2
console.log(index);
console.log(streets.indexOf("Overpoortstraat")); // 3
console.log(streets.indexOf("Bloemstraat")); // -1

// we weten dat een onbekend item -1 terug geeft
// op deze manier kunnen we controleren of een item bestaat in een array
if (streets.indexOf("Bloemstraat") >= 0) {
  console.log("De array bevat Bloemstraat");
} else {
  console.log("De array bevat NIET Bloemstraat");
}

// modernere manier
if (streets.includes("Bloemstraat")) {
  console.log("De array bevat Bloemstraat");
} else {
  console.log("De array bevat NIET Bloemstraat");
}

// includes -> bestaat niet enkel op array, maar ook op string
const sentence = "Hallo 1PGMb in lokaal B03.02";
console.log(sentence.includes("Hallo")); // true
console.log(sentence.includes("n")); // true
console.log(sentence.includes("paddestoel")); // false
console.log(sentence.includes("hallo")); // false -> includes is hoofdlettergevoelig
console.log(sentence.toLowerCase());
console.log(sentence.toLowerCase().includes("hallo")); // true
