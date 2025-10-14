console.log("Hallo iedereen");

console.log(window.innerHeight);
console.log(window.innerWidth);

document.body.style.backgroundColor = "orange";

// html aan passen
// via tag name -> bijna nooit gebruiken
const $h1 = document.getElementsByTagName("h1")[0];
$h1.style.color = "#ffffff";
$h1.innerText = "Hallo iedereen vanuit JavaScript";

// via className -> enkel indien er meerdere zijn
const $descriptions = document.getElementsByClassName("description");
for (const $description of $descriptions) {
  $description.innerText = "Aangepaste tekst";
}

// via id -> beste
// geeft element terug, geen array
const $title = document.getElementById("heading");
if ($title !== null) {
  $title.innerText = "Laatste aanpassing";
  $title.style.fontSize = "4rem";
  $title.style.color = "#98DA3F";
}

const teams = [
  "FC Barcelona",
  "PSG",
  "Club Brugge",
  "AC Milan",
  "Ajax",
  "Galatasaray",
  "AS Monaco",
  "Manchester United",
];
const $list = document.getElementById("list");
if ($list !== null) {
  let html = "";
  for (const team of teams) {
    html = html + `<li class="item">${team}</li>`;
  }
  $list.innerHTML = html;
}
