(() => {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const $btn = document.getElementById("btn");
  const $btnWin = document.getElementById("btn-win");

  $btn.addEventListener("click", function (e) {
    document.body.style.backgroundColor = "orange";
  });

  $btnWin.addEventListener("mouseenter", function (e) {
    e.currentTarget.style.left = `${generateRandomNumber(5, 95)}vw`;
    e.currentTarget.style.top = `${generateRandomNumber(5, 95)}vh`;
  });

  $btnWin.addEventListener("click", function (e) {
    window.alert("Je bent gewonnen!");
  });

  const $rectangles = document.getElementsByClassName("rectangle");
  for (const $rectangle of $rectangles) {
    $rectangle.addEventListener("click", function (e) {
      e.currentTarget.style.transform = "rotate(180deg)";
    });
  }
})();
