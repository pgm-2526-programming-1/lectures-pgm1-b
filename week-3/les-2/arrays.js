const instruments = ["gitaar", "cello", "drum", "contrabas"];

/*
 * Array functies: te kennen
 */
instruments.push("piano"); // toevoegen aan einde van de array
console.log(instruments);

const text = instruments.join(" ~~~ "); // array naar een string
console.log(text);

const deleted = instruments.pop(); // verwijderd het laatste item van een array
console.log(instruments);
console.log(deleted);

instruments.shift(); // verwijderd het eerste item van een array
console.log(instruments);

// sorteren -> past originele array aan!
instruments.sort();
console.log(instruments);

/*
 * Array functies: opzoeken wanneer je ze nodig hebt (maar in achterhoofd houden dat het bestaat)
 */
instruments.unshift("mondharmonica"); // toevoegen aan het begin van de array
console.log(instruments);

instruments.splice(2, 0, "viool"); // toevoegen vanaf bepaalde index
console.log(instruments);

instruments.splice(2, 1); // vanaf index 2 één element verwijderen
console.log(instruments);

const extraInstruments = ["harp", "kazoo"];
// concat voegt 2 arrays samen, zonder de originele aan te passen
const allInstruments = instruments.concat(extraInstruments);
console.log(instruments);
console.log(allInstruments);

// een stukje uit een array nemen en in nieuwe variabele steken
// originele array blijft ongewijzigd
const part = instruments.slice(2, 4);
console.log(instruments);
console.log(part);
