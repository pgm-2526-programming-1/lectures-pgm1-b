const brands = ["Gucci", "Louis Vuitton", "Aldi", "Prada", "Moncler", "Nike", "Adidas"];
// alle datatypes door elkaar = kan
const items = ["Gucci", true, 39, 20, false, "Aldi"];

// length
console.log(brands.length);
console.log(brands[0]);
console.log(brands[brands.length - 1]);

// elementen toevoegen
brands.push("Balenciaga");
console.log(brands);
console.log(brands[brands.length - 1]);

brands[0] = "Zeeman";
console.log(brands);
console.log("========================");

// array kunnen overlopen (loop)
let text = "";
for (const brand of brands) {
  // text += `• ${brand}\n`
  text = text + `• ${brand}\n`; // \n = enter
}
console.log(`
Mijn favoriete merken:
${text}
`);

// join -> van een array naar een string
// brands zelf is niet aangepast, nog steeds array
// resultaat is eens string
const joined = brands.join(" --- ");
console.log(joined);

// split -> van een string naar een array
const date = "01/10/2025";
const array = date.split("/");
console.log(array);
