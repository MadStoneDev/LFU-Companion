import * as FileSystem from "expo-file-system";
import fortressAccount from "./MobX/FortressAccount";
import fortressStore from "./MobX/FortressStore";
import resourceStore from "./MobX/ResourceStore";
import buildingStore from "./MobX/BuildingStore";

const filePath = `${FileSystem.documentDirectory}/resourcesData.json`;
const buildingFilePath = `${FileSystem.documentDirectory}/buildingsData.json`;

const testFortressStore = () => {
  const currentUsername = resourceStore.username;
  const currentResources = resourceStore;
  const currentBuilding = buildingStore;

  fortressStore.addFortressAccount(currentUsername,  currentResources, currentBuilding);
  console.log(JSON.stringify(fortressStore));
  fortressStore.resetFortressStore();
};

export { testFortressStore };
