const amount = 1000; // number
const name = "Michael"; // string
const isDocent = true; // boolean
let x; // undefined
console.log(x); // undefined

if (isDocent) {
  console.log(name + " is een docent");
  console.log(`${name} is een docent`);
} else {
  console.log(name + " is geen docent");
  console.log(`${name} is geen docent`);
}

if (isDocent && name === "Michael") {
  console.log(`${name} is docent Programming 1`);
} else if (isDocent) {
  console.log(`${name} is geen docent Programming 1`);
} else {
  console.log(`${name} is geen docent`);
}

if (isDocent) {
  if (name === "Michael") {
    console.log(`${name} is docent Programming 1`);
  } else {
    console.log(`${name} is geen docent Programming 1`);
  }
} else {
  console.log(`${name} is geen docent`);
}
