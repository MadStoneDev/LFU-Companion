import * as FileSystem from "expo-file-system";
import fortressAccount from "./MobX/FortressAccount";
import fortressStore from "./MobX/FortressStore";

const filePath = `${FileSystem.documentDirectory}/resourcesData.json`;
const buildingFilePath = `${FileSystem.documentDirectory}/buildingsData.json`;

const testFortressStore = () => {
  fortressStore.addFortressAccount("Test");
  console.log(JSON.stringify(fortressStore));
  fortressStore.resetFortressStore();
};

export { testFortressStore };
