import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Button, Image } from "react-native";
import {
  checkAndCreateFile,
  deleteDataFromFile,
  loadDataFromFile,
  saveDataToFile,
} from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";
import { usernames } from "../Helpers/usernames";

const SplashScreen = () => {
  useEffect(() => {
    const loadAndCheckFile = async () => {
      // await deleteDataFromFile();
      await checkAndCreateFile();
      const data = await loadDataFromFile();

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

        console.log("Username: ", data.username);
        resourceStore.updateUsername(data.username);
      }

      if (!data.username || data.username.length === 0) {
        resourceStore.updateUsername(
          usernames[Math.floor(Math.random() * usernames.length - 1)]
        );
      }
      await saveDataToFile(resourceStore);
    };

    loadAndCheckFile().then(() => {
      console.log("File loaded");
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

      <ActivityIndicator size="large" color="#d35322" />
    </SafeAreaView>
  );
};

export default SplashScreen;
