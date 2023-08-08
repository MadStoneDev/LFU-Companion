import { action, makeObservable, observable, computed } from "mobx";

class DataStore {
  constructor() {
    this.buildingStore = new BuildingStore();
    this.resourceStore = new ResourceStore();

    makeObservable(this, {
      buildingStore: observable,
      resourceStore: observable,
    });
  }
}

class BuildingStore {
  // ... Same as before ...
}

class ResourceStore {
  // ... Same as before ...
}

const dataStore = new DataStore();
export default dataStore;
