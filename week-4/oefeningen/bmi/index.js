const weight = parseFloat(window.prompt("Wat is je gewicht?"));
const length = parseFloat(window.prompt("Wat is je lengte?"));

function calculateBMI(w, l) {
  return w / (l * l);
}

const bmi = calculateBMI(weight, length);

function bmiToString(bmi) {
  if (bmi < 18.5) {
    return "ondergewicht";
  } else if (bmi > 25) {
    return "overgewicht";
  } else {
    return "een gezond gewicht";
  }
}

window.alert(bmiToString(bmi));
