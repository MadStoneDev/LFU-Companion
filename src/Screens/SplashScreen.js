import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image } from "react-native";
import {
  checkAndCreateFile,
  loadDataFromFile,
  saveDataToFile,
} from "../Helpers/FileManager";
import resourceStore from "../Helpers/MobX/ResourceStore";
import buildingStore from "../Helpers/MobX/BuildingStore";
import { usernames } from "../Helpers/usernames";
import {
  checkAndCreateBuildingFile,
  loadDataFromBuildingFile,
} from "../Helpers/BuildingsFileManager";

const SplashScreen = () => {
  useEffect(() => {
    const loadAndCheckFile = async () => {
      // await deleteDataFromFile();
      await checkAndCreateFile();
      await checkAndCreateBuildingFile();
      const data = await loadDataFromFile();
      const buildingData = await loadDataFromBuildingFile();

      const { stone, iron, zCoins, diamonds } = resourceStore;

      if (data) {
        resourceStore.updateWarehouseQuantity(
          "stone",
          parseInt(data.stone.warehouse, 10)
        );
        resourceStore.updateWarehouseQuantity(
          "iron",
          parseInt(data.iron.warehouse, 10)
        );
        resourceStore.updateWarehouseQuantity(
          "zCoins",
          parseInt(data.zCoins.warehouse, 10)
        );
        resourceStore.updateWarehouseQuantity(
          "diamonds",
          parseInt(data.diamonds.warehouse, 10)
        );

        Object.entries(stone.chests).map(([quantity]) => {
          resourceStore.updateChestQuantity(
            "stone",
            quantity,
            parseInt(data.stone.chests[quantity], 10)
          );
        });

        Object.entries(iron.chests).map(([quantity]) => {
          resourceStore.updateChestQuantity(
            "iron",
            quantity,
            parseInt(data.iron.chests[quantity], 10)
          );
        });

        Object.entries(zCoins.chests).map(([quantity]) => {
          resourceStore.updateChestQuantity(
            "zCoins",
            quantity,
            parseInt(data.zCoins.chests[quantity], 10)
          );
        });

        Object.entries(diamonds.chests).map(([quantity]) => {
          resourceStore.updateChestQuantity(
            "diamonds",
            quantity,
            parseInt(data.diamonds.chests[quantity], 10)
          );
        });

        resourceStore.updateUsername(data.username);
      }

      if (!data.username || data.username.length === 0) {
        resourceStore.updateUsername(
          usernames[Math.floor(Math.random() * usernames.length - 1)]
        );
      }

      if (buildingData) {
        buildingStore.updateAllBuildings(buildingData.buildings);
        buildingStore.clearBuildingProgress();
        buildingStore.getBuildingProgress();
      }

      await saveDataToFile(resourceStore);
    };

    loadAndCheckFile().then(() => {
      console.log("File loaded");
      buildingStore.clearBuildingProgress();
      buildingStore.getBuildingProgress();
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        style={{
          marginBottom: 30,
          height: 50,
          maxWidth: "65%",
          resizeMode: "contain",
        }}
        source={require("../../assets/images/logo.png")}
      />

      <ActivityIndicator size="large" color="#e81863" />
    </SafeAreaView>
  );
};

export default SplashScreen;
