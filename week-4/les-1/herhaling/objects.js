const person = {
  name: "Lucas",
  age: 20,
  address: "Straat 20",
  postalCode: "1000",
  city: "Brussel",
}; // object

console.log(person.name + " woont in " + person.city);
console.log(`${person.name} woont in ${person.city}`);

// Lucas
person.postalCode = "9000";
person.city = "Gent";
console.log(person);
console.log(`${person.name} woont in ${person.city}`);
