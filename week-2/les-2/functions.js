function sayHello() {
  console.log("Hallo");
}

// uitvoerende functies
function sayHelloTo(name = "onbekende persoon", age) {
  console.log(`Goeiemiddag ${name} die ${age} jaar oud is`);
}

sayHello();
sayHello();
sayHello();
sayHelloTo("Naseem", 19);
sayHelloTo("Thorsten", 17);
sayHelloTo("Sidaqatullah", 21);
sayHelloTo();

console.log("======================");

// return functie -> functie waarvan je resultaat verwacht
function getHelloPhrase(name) {
  return `Goeiemiddag ${name} vanuit de return functie`;
}

const phrase = getHelloPhrase("Gabriel");
console.log(phrase);
console.log(getHelloPhrase("Suenna"));
console.log(getHelloPhrase("Yoschi"));

function calculateAge(birthYear) {
  const age = 2025 - birthYear;
  return age;
}

console.log(`De leeftijd is ${calculateAge(2006)}`);
console.log(`De leeftijd is ${calculateAge(2007)}`);
console.log(`De leeftijd is ${calculateAge(2005)}`);
console.log(`De leeftijd is ${calculateAge(1995)}`);
console.log(`Mijn leeftijd is ${calculateAge(1992)}`);
