import { makeObservable, observable, action, computed } from "mobx";
import resourceStore from "./ResourceStore";

class BuildingStore {
  // Sample Building Data
  // {id, name, colour, stoneRequired, ironRequired, zCoinsRequired, diamondsRequired}
  buildings = [
    {
      id: 1,
      name: "Building #1",
      colour: "blue",
      stoneRequired: 30000,
      ironRequired: 20000,
      zCoinsRequired: 45000,
      diamondsRequired: 5700,
    },
  ];

  // Weightings last updated: 14.07.2023
  weightings = {
    stone: 1,
    iron: 1,
    zCoins: 1,
    diamonds: 5,
  };

  constructor() {
    makeObservable(this, {
      buildings: observable,
      weightings: observable,
      addNewBuilding: action,
      getBuildingProgress: computed,
    });
  }

  addNewBuilding(
    // icon,
    id,
    name,
    colour,
    stoneRequired,
    ironRequired,
    zCoinsRequired,
    diamondsRequired
  ) {
    // create a random id

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

  get getBuildingProgress() {
    return (building) => {
      const acquiredStone = resourceStore.totalStone;
      const acquiredIron = resourceStore.totalIron;
      const acquiredZCoins = resourceStore.totalZCoins;
      const acquiredDiamonds = resourceStore.totalDiamonds;

      const cappedStone = Math.min(acquiredStone, building.stoneRequired);
      const cappedIron = Math.min(acquiredIron, building.ironRequired);
      const cappedZCoins = Math.min(acquiredZCoins, building.zCoinsRequired);
      const cappedDiamonds = Math.min(
        acquiredDiamonds,
        building.diamondsRequired
      );

      const weightedStone = this.weightings.stone * cappedStone;
      const weightedIron = this.weightings.iron * cappedIron;
      const weightedZCoins = this.weightings.zCoins * cappedZCoins;
      const weightedDiamonds = this.weightings.diamonds * cappedDiamonds;

      const totalRequired =
        this.weightings.stone * building.stoneRequired +
        this.weightings.iron * building.ironRequired +
        this.weightings.zCoins * building.zCoinsRequired +
        this.weightings.diamonds * building.diamondsRequired;

      const totalAcquired =
        weightedStone + weightedIron + weightedZCoins + weightedDiamonds;

      return Math.floor(Math.min(totalAcquired / totalRequired, 1) * 100);
    };
  }
}

const buildingStore = new BuildingStore();

export default buildingStore;
