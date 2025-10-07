const name = "Mike Tyson"; // string
const age = 59; // number
const nationality = "Amerikaan";
const isLeftHanded = false; // boolean
const children = ["Miguel", "Exodus", "Milan", "Amir", "Mikey", "Rayna"]; // array

const object = {};

// betere manier om verschillende zaken over één iets te vertellen
// hebben maar 1 variabele, namelijk person
const person = {
  name: "Mike Tyson",
  age: 59,
  nationality: "Amerikaan",
  isLeftHanded: false,
  children: ["Miguel", "Exodus", "Milan", "Amir", "Mikey", "Rayna"],
}; // object

console.log(person);
// wat is de persoon zijn naam?
console.log(person.name);
console.log(person.children);

console.log(`${person.name} is een ${person.nationality}`);

// Mike Tyson is jarig, hoera 🎂
person.age = 60;
console.log(person);
person.sport = "Boksen";
console.log(person);

// naam naar de console loggen -> 2 manieren
console.log(person.name);
console.log(person["name"]); // minder handig, maar soms nodig

// for IN (niet for OF)
for (const prop in person) {
  console.log(`${prop} is ${person[prop]}`);
}

const club = {
  name: "Oklahoma City Thunder",
  stadium: {
    name: "Paycom Center",
    address: "100 W Reno Ave, Oklahoma City, OK 73102",
    country: "USA",
  },
};

console.log(`${club.name} speelt in het ${club.stadium.name}`);
