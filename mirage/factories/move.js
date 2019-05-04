import { Factory } from "ember-cli-mirage";

export default Factory.extend({
  name() {
    var min = 0;
    var max = 163;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;

    var array = [
      "Absorb",
      "Acid",
      "Acid Armor",
      "Agility",
      "Amnesia",
      "Aurora Beam",
      "Barrage",
      "Barrier",
      "Bide",
      "Bind",
      "Bite",
      "Blizzard",
      "Body Slam",
      "Bone Club",
      "Bonemerang",
      "Bubble",
      "Bubble Beam",
      "Clamp",
      "Comet Punch",
      "Confuse Ray",
      "Confusion",
      "Constrict",
      "Conversion",
      "Counter",
      "Crabhammer",
      "Cut",
      "Defense Curl",
      "Dig",
      "Disable",
      "Dizzy Punch",
      "Double Kick",
      "Double Slap",
      "Double Team",
      "Double-Edge",
      "Dragon Rage",
      "Dream Eater",
      "Drill Peck",
      "Earthquake",
      "Egg Bomb",
      "Ember",
      "Explosion",
      "Fire Blast",
      "Fire Punch",
      "Fire Spin",
      "Fissure",
      "Flamethrower",
      "Flash",
      "Fly",
      "Focus Energy",
      "Fury Attack",
      "Fury Swipes",
      "Glare",
      "Growl",
      "Growth",
      "Guillotine",
      "Gust",
      "Harden",
      "Haze",
      "Headbutt",
      "High Jump Kick",
      "Horn Attack",
      "Horn Drill",
      "Hydro Pump",
      "Hyper Beam",
      "Hyper Fang",
      "Hypnosis",
      "Ice Beam",
      "Ice Punch",
      "Jump Kick",
      "Karate Chop",
      "Kinesis",
      "Leech Life",
      "Leech Seed",
      "Leer",
      "Lick",
      "Light Screen",
      "Lovely Kiss",
      "Low Kick",
      "Meditate",
      "Mega Drain",
      "Mega Kick",
      "Mega Punch",
      "Metronome",
      "Mimic",
      "Minimize",
      "Mirror Move",
      "Mist",
      "Night Shade",
      "Pay Day",
      "Peck",
      "Petal Dance",
      "Pin Missile",
      "Poison Gas",
      "Poison Powder",
      "Poison Sting",
      "Pound",
      "Psybeam",
      "Psychic",
      "Psywave",
      "Quick Attack",
      "Rage",
      "Razor Leaf",
      "Razor Wind",
      "Recover",
      "Reflect",
      "Rest",
      "Roar",
      "Rock Slide",
      "Rock Throw",
      "Rolling Kick",
      "Sand Attack",
      "Scratch",
      "Screech",
      "Seismic Toss",
      "Self-Destruct",
      "Sharpen",
      "Sing",
      "Skull Bash",
      "Sky Attack",
      "Slam",
      "Slash",
      "Sleep Powder",
      "Sludge",
      "Smog",
      "Smokescreen",
      "Soft-Boiled",
      "Solar Beam",
      "Sonic Boom",
      "Spike Cannon",
      "Splash",
      "Spore",
      "Stomp",
      "Strength",
      "String Shot",
      "Struggle",
      "Stun Spore",
      "Submission",
      "Substitute",
      "Super Fang",
      "Supersonic",
      "Surf",
      "Swift",
      "Swords Dance",
      "Tackle",
      "Tail Whip",
      "Take Down",
      "Teleport",
      "Thrash",
      "Thunder",
      "Thunder Punch",
      "Thunder Shock",
      "Thunder Wave",
      "Thunderbolt",
      "Toxic",
      "Transform",
      "Tri Attack",
      "Twineedle",
      "Vice Grip",
      "Vine Whip",
      "Water Gun",
      "Waterfall",
      "Whirlwind",
      "Wing Attack",
      "Withdraw",
      "Wrap"
    ];

    return array[index];
  },

  type() {
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

  power() {
    return 20 + Math.floor(Math.random() * 100);
  }
});
