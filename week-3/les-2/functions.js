function naamFunctie(argument1, argument2 = 15) {
  console.log("Hallo");
  console.log(argument1);
  console.log(argument2);
}

naamFunctie(10, 30);
naamFunctie(20);

/* ***************************************
 * Originele manier (function)
 *****************************************/
// 1: Een functie die iets uitvoert
function doSomething() {
  console.log("Ik ben een functie die iets uitvoert");
}
const result = doSomething();
console.log("Result 1", result);

// 2: Een functie die iets terug geeft (bv. berekening, iets samenstellen, ...)
function getSomething() {
  return "Ik ben een functie die iets terug geeft";
}
const result2 = getSomething();
console.log("Result 2", result2);

/* ***************************************
 * Modernere manier (arrow function)
 *****************************************/
// functie die uitvoert
const doSomethingArrow = () => {
  console.log("Ik ben een functie die iets uitvoert");
};
// functie die iets terug geeft
const getSomethingArrow = () => {
  return "Ik ben een functie die iets terug geeft";
};
// functie die iets terug geeft (short hand)
const getSomethingArrowShort = () => "Ik ben een functie die iets terug geeft";

function getEmoji(name) {
  if (!name) {
    // name !== undefined
    return "Geen naam mee gegeven";
  }

  if (name === "vuur") {
    return "🔥";
  } else if (name === "computer") {
    return "💻";
  } else {
    return "❓";
  }
}

console.log(getEmoji());
console.log(getEmoji("vuur"));
console.log(getEmoji("computer"));
console.log(getEmoji("onbekend"));
