//@ts-check
import { sleep } from "../../../utils";

export let characters = [
  { label: "3-D Man", value: "3-D Man" },
  { label: "A-Bomb (HAS)", value: "A-Bomb (HAS)" },
  { label: "A.I.M.", value: "A.I.M." },
  { label: "Ancient One", value: "Ancient One" },
  { label: "Big Bertha", value: "Big Bertha" },
  { label: "Bill Hollister", value: "Bill Hollister" },
  { label: "Black Queen", value: "Black Queen" },
  { label: "Black Tom", value: "Black Tom" },
  {
    label: "Brotherhood of Evil Mutants",
    value: "Brotherhood of Evil Mutants",
  },
  { label: "Bruce Banner", value: "Bruce Banner" },
  { label: "Captain Midlands", value: "Captain Midlands" },
  { label: "Chronomancer", value: "Chronomancer" },
  { label: "Clint Barton", value: "Clint Barton" },
  { label: "Colonel America", value: "Colonel America" },
  { label: "Daredevil (Marvel Heroes)", value: "Daredevil (Marvel Heroes)" },
  { label: "Diana Prince", value: "Diana Prince" },
  { label: "Drax", value: "Drax" },
  { label: "Gamora", value: "Gamora" },
  { label: "Gene Sailors", value: "Gene Sailors" },
  { label: "Ghost Rider (Daniel Ketch)", value: "Ghost Rider (Daniel Ketch)" },
  { label: "Grandmaster", value: "Grandmaster" },
  { label: "Groot", value: "Groot" },
  { label: "Hedge Knight", value: "Hedge Knight" },
  { label: "Holy", value: "Holy" },
  { label: "Hulk", value: "Hulk" },
  { label: "Hulk-dok", value: "Hulk-dok" },
  { label: "Jean Grey", value: "Jean Grey" },
  { label: "MVP", value: "MVP" },
  { label: "Madrox", value: "Madrox" },
  { label: "Mantis", value: "Mantis" },
  { label: "Masters of Evil", value: "Masters of Evil" },
  { label: "Mother Askani", value: "Mother Askani" },
  { label: "Mr. Fixit", value: "Mr. Fixit" },
  { label: "Mysterio (Daniel Berkhart)", value: "Mysterio (Daniel Berkhart)" },
  { label: "Mysterio (Francis Klum)", value: "Mysterio (Francis Klum)" },
  { label: "Mystique", value: "Mystique" },
  { label: "Natasha Romanoff", value: "Natasha Romanoff" },
  { label: "Nebula", value: "Nebula" },
  { label: "Nick Fury", value: "Nick Fury" },
  { label: "Nightcrawler (Ultimate)e", value: "Nightcrawler (Ultimate)" },
  { label: "Norman Osborn", value: "Norman Osborn" },
  { label: "Omega the Unknown", value: "Omega the Unknown" },
  { label: "Pet Avengers", value: "Pet Avengerse" },
  { label: "Peter Parker", value: "Peter Parker" },
  { label: "Peter Quill", value: "Peter Quill" },
  { label: "Phil Sheldon", value: "Phil Sheldon" },
  { label: "Quasimodo", value: "Quasimodo" },
  { label: "Quicksilver", value: "Quicksilver" },
  { label: "Red Ghost (Ultimate)", value: "Red Ghost (Ultimate)" },
  { label: "Red Wolf", value: "Red Wolf" },
  { label: "Rocket Raccoon", value: "Rocket Raccoon" },
  {
    label: "Rocket Raccoon (Marvel Heroes)",
    value: "Rocket Raccoon (Marvel Heroes)",
  },
  { label: "Sabretooth (House of M)", value: "Sabretooth (House of M)" },
  { label: "Santa Claus", value: "Santa Claus" },
  { label: "Scarlet Witch", value: "Scarlet Witch" },
  { label: "Silk Fever", value: "Silk Fever" },
  { label: "Stephen Strange", value: "Stephen Strange" },
  { label: "Steve Rogers", value: "Steve Rogers" },
  { label: "Thor", value: "Thor" },
  { label: "Tony Stark", value: "Tony Stark" },
  { label: "Venom (Ultimate)", value: "Venom (Ultimate)" },
  { label: "Vision", value: "Vision" },
  { label: "Wanda Maximoff", value: "Wanda Maximoff" },
  { label: "Wolverine", value: "Wolverine" },
];

export let characters_string_only = [
  "3-D Man",
  "A-Bomb (HAS)",
  "A.I.M.",
  "Ancient One",
  "Big Bertha",
  "Bill Hollister",
  "Black Queen",
  "Black Tom",
  "Brotherhood of Evil Mutants",
  "Bruce Banner",
  "Captain Midlands",
  "Chronomancer",
  "Clint Barton",
  "Colonel America",
  "Daredevil (Marvel Heroes)",
  "Diana Prince",
  "Drax",
  "Gamora",
  "Gene Sailors",
  "Ghost Rider (Daniel Ketch)",
  "Grandmaster",
  "Groot",
  "Hedge Knight",
  "Holy",
  "Hulk",
  "Hulk-dok",
  "Jean Grey",
  "MVP",
  "Madrox",
  "Mantis",
  "Masters of Evil",
  "Mother Askani",
  "Mr. Fixit",
  "Mysterio (Daniel Berkhart)",
  "Mysterio (Francis Klum)",
  "Mystique",
  "Natasha Romanoff",
  "Nebula",
  "Nick Fury",
  "Nightcrawler (Ultimate)",
  "Norman Osborn",
  "Omega the Unknown",
  "Pet Avengers",
  "Peter Parker",
  "Peter Quill",
  "Phil Sheldon",
  "Quasimodo",
  "Quicksilver",
  "Red Ghost (Ultimate)",
  "Red Wolf",
  "Rocket Raccoon",
  "Rocket Raccoon (Marvel Heroes)",
  "Sabretooth (House of M)",
  "Santa Claus",
  "Scarlet Witch",
  "Silk Fever",
  "Stephen Strange",
  "Steve Rogers",
  "Thor",
  "Tony Stark",
  "Venom (Ultimate)",
  "Vision",
  "Wanda Maximoff",
  "Wolverine",
];

export const fetchCharacters = async (filters) => {
  await sleep(1000);
  if (filters.length) {
    let cache = {};

    filters.forEach((word, idx) => {
      let options = [...characters_string_only].filter((item) => {
        return item.toLowerCase().indexOf(word.toLowerCase()) > -1;
      });

      delete cache[idx + 1];
      cache[idx] = options;
    });
    return Object.values(cache)
      .flat()
      .filter((v, i, self) => self.indexOf(v) === i);
  } else {
    return [];
  }
};
