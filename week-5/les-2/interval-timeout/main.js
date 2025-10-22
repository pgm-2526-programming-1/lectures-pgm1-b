(() => {
  const $title = document.getElementById("title");
  // timeout -> iets na x aantal seconden uitvoeren (1 maal)
  setTimeout(function () {
    $title.innerText = "Ik ben veranderd";
  }, 2000);

  // interval -> iets elke x aantal seconden uitvoeren
  setInterval(function () {
    console.log("Hallo");
  }, 1000);

  const $name = document.getElementById("name");
  const students = ["Senna", "Yoschi", "Jonas", "Gabriel", "Jarne"];
  const intervalId = setInterval(function () {
    const student = students.pop();
    if (student) {
      $name.innerText = student;
    } else {
      // de interval stoppen
      clearInterval(intervalId);
    }
  }, 1000);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const $circle = document.getElementById("circle");
  const colors = ["#b4b443", "orange", "#9847ee", "red", "green", "#23eeee", "#fafafa", "#a45837"];

  // kan ook met arrow function
  let index = 0;
  setInterval(() => {
    const size = generateRandomNumber(50, 80);
    $circle.style.width = `${size}vw`;
    $circle.style.height = `${size}vw`;
    $circle.style.backgroundColor = colors[index];
    index = index + 1 >= colors.length ? 0 : index + 1;
  }, 1000);
})();
