const team = "New York Knicks";
const city = "New York";
const founded = 1946;
const stadium = "Madison Square Garden";

// normale pure string concatenation
console.log(
  team + " is een NBA ploeg uit " + city + ". Deze is opgericht in " + founded + " en ze spelen in " + stadium
);
// template literal
console.log(`${team} is een NBA ploeg uit ${city}.
Deze is opgericht in ${founded} en ze spelen in ${stadium}`);

// snake case -> gebruiken wij niet
const age_of_team = 2025 - founded;

// kebab case -> gebruiken wij niet en werkt niet in JavaScript
// const age-of-team = 2025 - founded;

// pascal case -> gebruiken wij niet voor gewone variabele
const AgeOfTeam = 2025 - founded;

// camel case -> dit gebruiken wij altijd
const ageOfTeam = 2025 - founded;
console.log(ageOfTeam);

// Math
const a = 10;
const b = 20;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b); // modulo = restwaarde
