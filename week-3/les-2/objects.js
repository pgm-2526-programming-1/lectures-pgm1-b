const artists = [
  {
    name: "Chris Brown",
    genre: "r&b",
    country: "USA",
  },
  {
    name: "Bart Peeters",
    genre: "folk",
    country: "Belgium",
  },
  {
    name: "Lucky Dube",
    genre: "reggae",
    country: "Jamaica",
  },
  {
    name: "Ye",
    genre: "hip-hop",
    country: "USA",
  },
  {
    name: "Jay-Z",
    genre: "hip-hop",
    country: "USA",
  },
  {
    name: "Beyoncé",
    genre: "pop",
    country: "USA",
  },
  {
    name: "3robi",
    genre: "hip-hop",
    country: "The Netherlands",
  },
  {
    name: "Broederliefde",
    genre: "hip-hop",
    country: "The Netherlands",
  },
];

for (const artist of artists) {
  console.log(`${artist.name} from ${artist.country}`);
}

artists.push({
  name: "Bob Marley",
  genre: "reggae",
  country: "Jamaica",
});
console.log(artists);
