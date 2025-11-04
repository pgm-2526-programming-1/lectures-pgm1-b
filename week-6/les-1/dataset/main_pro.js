(() => {
  const $list = document.getElementById("list");
  const $detail = document.getElementById("detail");

  function generateHTMLForRollercoasters(rollercoasters) {
    let html = "";
    for (const rollercoaster of rollercoasters) {
      html += `
      <li class="item" data-id="${rollercoaster.id}">
        <h2>${rollercoaster.name}</h2>
      </li>
    `;
    }
    return html;
  }

  function generateHTMLForRollercoaster(rollercoaster) {
    return `
      <h1>${rollercoaster.name}</h1>
      <p>Aantal plaatsen: ${rollercoaster.seats}</p>
      <p>Staat in park: ${rollercoaster.park}</p>
    `;
  }

  $list.innerHTML = generateHTMLForRollercoasters(rollercoasters);

  function registerListeners() {
    const $items = document.getElementsByClassName("item");
    for (const $item of $items) {
      $item.addEventListener("click", function (e) {
        const id = e.currentTarget.dataset.id;
        // juiste element zoeken in array op basis van id
        for (const rollercoaster of rollercoasters) {
          if (rollercoaster.id === id) {
            $detail.innerHTML = generateHTMLForRollercoaster(rollercoaster);
            $detail.classList.add("open");
          }
        }
      });
    }
  }

  registerListeners();
})();
