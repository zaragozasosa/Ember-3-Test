import { Factory, trait } from "ember-cli-mirage";

export default Factory.extend({
  name() {
    var min = 0;
    var max = 150;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;

    var array = [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Squirtle",
      "Wartortle",
      "Blastoise",
      "Caterpie",
      "Metapod",
      "Butterfree",
      "Weedle",
      "Kakuna",
      "Beedrill",
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Rattata",
      "Raticate",
      "Spearow",
      "Fearow",
      "Ekans",
      "Arbok",
      "Pikachu",
      "Raichu",
      "Sandshrew",
      "Sandslash",
      "Nidoran",
      "Nidorina",
      "Nidoqueen",
      "Nidoran",
      "Nidorino",
      "Nidoking",
      "Clefairy",
      "Clefable",
      "Vulpix",
      "Ninetales",
      "Jigglypuff",
      "Wigglytuff",
      "Zubat",
      "Golbat",
      "Oddish",
      "Gloom",
      "Vileplume",
      "Paras",
      "Parasect",
      "Venonat",
      "Venomoth",
      "Diglett",
      "Dugtrio",
      "Meowth",
      "Persian",
      "Psyduck",
      "Golduck",
      "Mankey",
      "Primeape",
      "Growlithe",
      "Arcanine",
      "Poliwag",
      "Poliwhirl",
      "Poliwrath",
      "Abra",
      "Kadabra",
      "Alakazam",
      "Machop",
      "Machoke",
      "Machamp",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Tentacool",
      "Tentacruel",
      "Geodude",
      "Graveler",
      "Golem",
      "Ponyta",
      "Rapidash",
      "Slowpoke",
      "Slowbro",
      "Magnemite",
      "Magneton",
      "Farfetch'd",
      "Doduo",
      "Dodrio",
      "Seel",
      "Dewgong",
      "Grimer",
      "Muk",
      "Shellder",
      "Cloyster",
      "Gastly",
      "Haunter",
      "Gengar",
      "Onix",
      "Drowzee",
      "Hypno",
      "Krabby",
      "Kingler",
      "Voltorb",
      "Electrode",
      "Exeggcute",
      "Exeggutor",
      "Cubone",
      "Marowak",
      "Hitmonlee",
      "Hitmonchan",
      "Lickitung",
      "Koffing",
      "Weezing",
      "Rhyhorn",
      "Rhydon",
      "Chansey",
      "Tangela",
      "Kangaskhan",
      "Horsea",
      "Seadra",
      "Goldeen",
      "Seaking",
      "Staryu",
      "Starmie",
      "Mr. Mime",
      "Scyther",
      "Jynx",
      "Electabuzz",
      "Magmar",
      "Pinsir",
      "Tauros",
      "Magikarp",
      "Gyarados",
      "Lapras",
      "Ditto",
      "Eevee",
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Porygon",
      "Omanyte",
      "Omastar",
      "Kabuto",
      "Kabutops",
      "Aerodactyl",
      "Snorlax",
      "Articuno",
      "Zapdos",
      "Moltres",
      "Dratini",
      "Dragonair",
      "Dragonite",
      "Mewtwo",
      "Mew"
    ];
    return array[index];
  },

  level() {
    return 5 + Math.floor(Math.random() * Math.floor(95));
  },

  type1() {
    var min = 0;
    var max = 13;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;

    var array = [
      "Grass",
      "Fire",
      "Electric",
      "Rock",
      "Ground",
      "Ice",
      "Ghost",
      "Psychic",
      "Water",
      "Normal",
      "Flying",
      "Fighting",
      "Dragon",
      "Bug"
    ];

    return array[index];
  },

  type2() {
    var multiType = Math.floor(Math.random() * 3) === 1;

    var min = 0;
    var max = 13;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;

    var array = [
      "Grass",
      "Fire",
      "Electric",
      "Rock",
      "Ground",
      "Ice",
      "Ghost",
      "Psychic",
      "Water",
      "Normal",
      "Flying",
      "Fighting",
      "Dragon",
      "Bug"
    ];

    if (multiType) {
      return array[index];
    } else {
      return null;
    }
  },

  withMoves: trait({
    afterCreate(pokemon, server) {
      server.createList("move", 4, { pokemon });
    }
  })
});
