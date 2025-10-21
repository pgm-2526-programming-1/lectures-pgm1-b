// IIFE -> Immediately Invoked Function Expression
(() => {
  const number = 20;

  const $list = document.getElementById("list");

  let html = "";
  for (const game of games) {
    html += `
      <li class="item">
        <h2>${game.name} by ${game.publisher}</h2>
        <p>Released: ${game.releaseDate}</p>
      </li>
    `;
  }

  $list.innerHTML = html;
})();
