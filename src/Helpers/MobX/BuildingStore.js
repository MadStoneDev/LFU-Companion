import { action, makeObservable, observable } from "mobx";
import "react-native-get-random-values";
import resourceStore from "./ResourceStore";

class BuildingStore {
  // Sample Building Data
  // {id, name, colour, stoneRequired, ironRequired, zCoinsRequired, diamondsRequired}
  buildings = [];

  // Weightings last updated: 14.07.2023
  weightings = {
    stone: 1,
    iron: 1,
    zCoins: 1,
    diamonds: 5,
  };

  progresses = {};

  constructor() {
    makeObservable(this, {
      buildings: observable,
      weightings: observable,
      progresses: observable,
      addNewBuilding: action,
      updateBuilding: action,
      deleteBuilding: action,
      updateAllBuildings: action,
      clearBuildingProgress: action,
      getBuildingProgress: action,
    });
  }

  addNewBuilding(
    // icon,
    name,
    colour,
    stoneRequired,
    ironRequired,
    zCoinsRequired,
    diamondsRequired
  ) {
    // create a random id

    const id = this.generateID(name);

    this.buildings.push({
      // icon,
      id,
      name,
      colour,
      stoneRequired,
      ironRequired,
      zCoinsRequired,
      diamondsRequired,
    });
  }

  updateBuilding(
    // icon,
    id,
    name,
    colour,
    stoneRequired,
    ironRequired,
    zCoinsRequired,
    diamondsRequired
  ) {
    const index = this.buildings.findIndex((building) => building.id === id);

    if (index !== -1) {
      this.buildings[index] = {
        ...this.buildings[index],
        name,
        colour,
        stoneRequired,
        ironRequired,
        zCoinsRequired,
        diamondsRequired,
      };
    }
  }

  deleteBuilding(id) {
    const index = this.buildings.findIndex((building) => building.id === id);

    if (index !== -1) {
      this.buildings.splice(index, 1);
    }
  }

  clearBuildingProgress() {
    this.progresses = {};
  }

  updateAllBuildings(data) {
    Object.assign(this.buildings, data);
  }

  getBuildingProgress() {
    let acquiredStone = resourceStore.totalStone;
    let acquiredIron = resourceStore.totalIron;
    let acquiredZCoins = resourceStore.totalZCoins;
    let acquiredDiamonds = resourceStore.totalDiamonds;

    const stoneWeight = this.weightings.stone;
    const ironWeight = this.weightings.iron;
    const zCoinsWeight = this.weightings.zCoins;
    const diamondsWeight = this.weightings.diamonds;

    for (const building of this.buildings) {
      const buildingId = building.id;

      const requiredStone = building.stoneRequired;
      const requiredIron = building.ironRequired;
      const requiredZCoins = building.zCoinsRequired;
      const requiredDiamonds = building.diamondsRequired;

      const cappedStone = Math.min(acquiredStone, requiredStone);
      const cappedIron = Math.min(acquiredIron, requiredIron);
      const cappedZCoins = Math.min(acquiredZCoins, requiredZCoins);
      const cappedDiamonds = Math.min(acquiredDiamonds, requiredDiamonds);

      const weightedStone = this.weightings.stone * cappedStone;
      const weightedIron = this.weightings.iron * cappedIron;
      const weightedZCoins = this.weightings.zCoins * cappedZCoins;
      const weightedDiamonds = this.weightings.diamonds * cappedDiamonds;

      const totalAcquired =
        weightedStone + weightedIron + weightedZCoins + weightedDiamonds;
      const totalRequired =
        stoneWeight * requiredStone +
        ironWeight * requiredIron +
        zCoinsWeight * requiredZCoins +
        diamondsWeight * requiredDiamonds;

      this.progresses[buildingId] = Math.max(
        Math.floor((totalAcquired / totalRequired) * 100),
        0
      );

      acquiredStone = Math.max(0, acquiredStone - requiredStone);
      acquiredIron = Math.max(0, acquiredIron - requiredIron);
      acquiredZCoins = Math.max(0, acquiredZCoins - requiredZCoins);
      acquiredDiamonds = Math.max(0, acquiredDiamonds - requiredDiamonds);
    }
  }

  generateID(buildingName) {
    return `${this.stringToBase26(buildingName)}-${this.stringToBase26(
      this.getRandomWord()
    )}-${this.stringToBase26(Date.now().toString())}`;
  }

  stringToBase26(str, length = 5) {
    const base26Chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let base26Array = [];
    let base26String = "";
    let remainder = 0;
    let currentDiv = 100000000000000000 + Math.random() * 999999999999999999;

    while (currentDiv > 0) {
      remainder = Math.floor(currentDiv % length);
      currentDiv = Math.floor(currentDiv / length);
      base26Array.unshift(remainder);
    }

    for (const item of base26Array) {
      base26String += base26Chars[item];
    }

    if (base26String.length < length) {
      for (let i = base26String.length; i < length; i++) {
        base26String +=
          base26Chars[Math.floor(Math.random() * base26Chars.length)];
      }
    }

    return base26String.substring(0, length);
  }

  getRandomWord() {
    const zombieWords = [
      "undead",
      "zombie",
      "apocalypse",
      "outbreak",
      "infection",
      "survival",
      "horde",
      "walker",
      "infected",
      "bite",
      "flesh",
      "decay",
      "doomsday",
      "cataclysm",
      "devastation",
      "wasteland",
      "ruins",
      "desolation",
      "mutation",
      "pandemic",
      "plague",
      "epidemic",
      "endurance",
      "cannibal",
      "revenant",
      "rot",
      "ruination",
      "ghoul",
      "decay",
      "crawlers",
      "corpse",
      "dystopia",
      "ghastly",
      "apocalyptic",
      "gruesome",
      "horror",
      "infestation",
      "nightmare",
      "peril",
      "ravage",
      "savage",
      "scavenge",
      "screams",
      "undying",
      "wicked",
      "zombified",
      "abandoned",
      "aftermath",
      "annihilation",
      "bloodcurdling",
      "carnage",
      "creepy",
      "deserted",
      "dreadful",
      "eerie",
      "freakish",
      "gritty",
      "harrowing",
      "hellish",
      "macabre",
      "mutilation",
      "ominous",
      "pale",
      "rotting",
      "shambling",
      "spine-chilling",
      "suffocating",
      "terrifying",
      "twisted",
      "unholy",
      "withered",
      "zombie",
      "barricade",
      "chaos",
      "survivor",
      "despair",
      "ruin",
      "fear",
      "death",
      "dead",
      "wasteland",
      "radioactive",
      "toxic",
      "quarantine",
      "survive",
      "doom",
      "post-apocalyptic",
      "mutation",
      "horror",
      "terror",
      "nightmare",
      "armageddon",
      "cursed",
      "nightfall",
      "fatal",
      "abomination",
      "putrefaction",
      "grotesque",
      "wretched",
      "extinction",
      "feral",
      "outcast",
      "stalker",
      "pale",
      "desolate",
      "morbid",
      "shattered",
      "hazardous",
      "devoured",
      "survivor",
      "dystopian",
    ];

    return zombieWords[Math.floor(Math.random() * zombieWords.length)];
  }
}

const buildingStore = new BuildingStore();

export default buildingStore;
