const year = 2025;
let isLeapYear = false;

// langere versie
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

// kortere versie
if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {
  isLeapYear = true;
}

// lange versie
if (isLeapYear) {
  console.log(`${year} is een schrikkeljaar`);
} else {
  console.log(`${year} is geen schrikkeljaar`);
}

// kortere versie
// Ternary operator
console.log(`${year} is ${isLeapYear ? "een schrikkeljaar" : "geen schrikkeljaar"}`);
