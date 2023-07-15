import { action, computed, makeObservable, observable } from "mobx";
import { v4 as uuidv4 } from "uuid";
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
      updateBuildings: action,
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

    const id = uuidv4();

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

  clearBuildingProgress() {
    this.progresses = {};
  }

  updateBuildings(data) {
    console.log("Before");
    console.log(this.buildings);
    Object.assign(this.buildings, data);
    console.log("After");
    console.log(this.buildings);
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
}

const buildingStore = new BuildingStore();

export default buildingStore;
