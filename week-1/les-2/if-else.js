const score = 80; // score op 100

// je bent geslaagd / je bent niet geslaagd
if (score >= 50) {
  console.log("Je bent geslaagd");
} else {
  console.log("Je bent niet geslaagd");
}

const temperature = 25;
// het is heet, het is warm, het is gemiddeld, het is koud, het vriest
if (temperature >= 30) {
  console.log("Het is heet");
} else if (temperature >= 20) {
  console.log("Het is warm");
} else if (temperature >= 15) {
  console.log("Het is gemiddeld");
} else if (temperature >= 0) {
  console.log("Het is koud");
} else {
  console.log("Het vriest");
}
