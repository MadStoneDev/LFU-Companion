import { createResourceStore } from "./ResourceStore";
import { createBuildingStore } from "./BuildingStore";
import fortressStore from "./FortressStore";

class FortressAccount {
  resourceStore;
  buildingStore;

  constructor(resourceStore, buildingStore) {
    this.resourceStore = resourceStore;
    this.buildingStore = buildingStore;
  }
}

const fortressAccount = new FortressAccount(
  createResourceStore(),
  createBuildingStore()
);
fortressStore.addFortressAccount(fortressAccount);
