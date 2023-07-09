import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image } from "react-native";
import {
  checkAndCreateFile,
  loadDataFromFile,
  saveDataToFile,
} from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";
import * as FileSystem from "expo-file-system";
import { usernames } from "../Helpers/usernames";

const SplashScreen = () => {
  useEffect(() => {
    const loadAndCheckFile = async () => {
      await checkAndCreateFile();
      const data = await loadDataFromFile();

      const { stone, iron, zCoins, diamonds } = resourceStore;

      if (data) {
        resourceStore.updateWarehouseQuantity("stone", data.stone.warehouse);
        resourceStore.updateWarehouseQuantity("iron", data.iron.warehouse);
        resourceStore.updateWarehouseQuantity("zCoins", data.zCoins.warehouse);
        resourceStore.updateWarehouseQuantity(
          "diamonds",
          data.diamonds.warehouse
        );

        Object.entries(stone.chests).map((quantity) => {
          resourceStore.updateChestQuantity(
            "stone",
            quantity,
            data.stone.chests[quantity]
          );
        });

        Object.entries(iron.chests).map((quantity) => {
          resourceStore.updateChestQuantity(
            "iron",
            quantity,
            data.iron.chests[quantity]
          );
        });

        Object.entries(zCoins.chests).map((quantity) => {
          resourceStore.updateChestQuantity(
            "zCoins",
            quantity,
            data.zCoins.chests[quantity]
          );
        });

        Object.entries(diamonds.chests).map((quantity) => {
          resourceStore.updateChestQuantity(
            "diamonds",
            quantity,
            data.diamonds.chests[quantity]
          );
        });

        if (resourceStore.username === "") {
          resourceStore.updateUsername(
            usernames[Math.floor(Math.random() * usernames.length - 1)]
          );

          await saveDataToFile(resourceStore);
        }
      }
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
