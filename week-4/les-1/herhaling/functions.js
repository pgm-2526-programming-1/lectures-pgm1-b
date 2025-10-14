function sayHello() {
  console.log("Hallo");
}

sayHello();
sayHello();
console.log("Nog eens?");
sayHello();

// uitvoerende functie
function logSum(x = 5, y = 10) {
  console.log(`Het resultaat is ${x + y}`);
}

logSum(10, 30);
logSum(20, 12);
logSum(50);

// return functies
function getSum(x, y) {
  return x + y;
}

console.log(`De som is ${getSum(10, 20)}`);
console.log(`De som is ${getSum(15, 25)}`);
console.log(`De som is ${getSum(100, 30)}`);

// arrow functies -> herbekijk de les uit week 3
