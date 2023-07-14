import { makeObservable, observable, action, computed } from "mobx";
import resourceStore from "./ResourceStore";

class BuildingStore {
  // Sample Building Data
  // {id, name, icon, stoneRequired, ironRequired, zCoinsRequired, diamondsRequired}
  buildings = [];

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
      addNew: action,
    });
  }

  addNewBuilding(
    icon,
    name,
    stoneRequired,
    ironRequired,
    zCoinsRequired,
    diamondsRequired
  ) {
    // create a random id

    this.buildings.push({
      icon,
      name,
      stoneRequired,
      ironRequired,
      zCoinsRequired,
      diamondsRequired,
    });
  }

  getBuildingProgress(building) {
    const acquiredStone = resourceStore.getTotalAmount("stone");
    const acquiredIron = resourceStore.getTotalAmount("iron");
    const acquiredZCoins = resourceStore.getTotalAmount("zCoins");
    const acquiredDiamonds = resourceStore.getTotalAmount("diamonds");

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

    return Math.min(totalAcquired / totalRequired, 1);
  }
}

const buildingStore = new BuildingStore();

export default buildingStore;
