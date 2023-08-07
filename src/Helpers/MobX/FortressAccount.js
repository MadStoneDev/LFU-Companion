import { createResourceStore } from "./ResourceStore";
import { createBuildingStore } from "./BuildingStore";

class FortressAccount {
  username;
  resourceStore;
  buildingStore;

  constructor(username) {
    this.username = username;
    this.resourceStore = createResourceStore();
    this.buildingStore = createBuildingStore();
  }
}

export default FortressAccount;
