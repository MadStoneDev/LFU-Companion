import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DiamondsScreen from "./DiamondsScreen";
import ZCoinsScreen from "./ZCoinsScreen";
import IronScreen from "./IronScreen";
import StoneScreen from "./StoneScreen";
import WarehouseScreen from "./WarehouseScreen";
import fileManager, { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";

const Tabs = createMaterialTopTabNavigator();

const StatsScreen = ({ route, navigation }) => {
  //  States
  const [saving, setSaving] = useState(false);

  const { stone, iron, zCoins, diamonds } = resourceStore;

  const handleWarehouseChange = (resourceType, amount) => {
    resourceStore.updateWarehouseQuantity(resourceType, amount);
  };

  const handleChestChange = (resourceType, quantity, amount) => {
    resourceStore.updateChestQuantity(resourceType, quantity, amount);
  };

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            saveDataToFile(resourceStore).then(() => {
              console.log("Data saved");
            });

            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>

        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <Tabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "#02C3B1",
          },
          tabBarItemStyle: {
            paddingHorizontal: 0,
            justifyContent: "flex-start",
          },
          tabBarIconStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarLabelStyle: {
            marginTop: 5,
            fontSize: 11,
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "none",
          },
        }}
      >
        <Tabs.Screen
          name={"Warehouse"}
          component={WarehouseScreen}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome5 name="warehouse" size={13} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Stone Chests"}
          component={StoneScreen}
          options={{
            tabBarIcon: (focused) => (
              <Entypo name="basecamp" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Iron Chests"}
          component={IronScreen}
          options={{
            tabBarIcon: (focused) => (
              <MaterialCommunityIcons name="gold" size={20} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Z Coins Chests"}
          component={ZCoinsScreen}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome5 name="coins" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Diamonds Chest"}
          component={DiamondsScreen}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome name="diamond" size={15} color="black" />
            ),
          }}
        />
      </Tabs.Navigator>

      {/*<TouchableWithoutFeedback*/}
      {/*  onPress={async () => {*/}
      {/*    setSaving(true);*/}

      {/*    const data = {*/}
      {/*      ...warehouseStats,*/}
      {/*      ...stoneStats,*/}
      {/*      ...ironStats,*/}
      {/*      ...zCoinsStats,*/}
      {/*      ...diamondStats,*/}
      {/*    };*/}

      {/*    await fileManager*/}
      {/*      .saveData(data)*/}
      {/*      .then((r) => {*/}
      {/*        console.log(r);*/}
      {/*      })*/}
      {/*      .catch((e) => console.log(e));*/}

      {/*    await fileManager.loadData().then((res) => {*/}
      {/*      console.log(res);*/}
      {/*    });*/}

      {/*    setTotalStone(fileManager.getTotalStone());*/}
      {/*    setTotalIron(fileManager.getTotalIron());*/}
      {/*    setTotalZCoins(fileManager.getTotalZCoins());*/}
      {/*    setTotalDiamonds(fileManager.getTotalDiamonds());*/}

      {/*    setTimeout(() => {*/}
      {/*      setSaving(false);*/}
      {/*    }, 500);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <View*/}
      {/*    style={[*/}
      {/*      styles.saveButton,*/}
      {/*      saving*/}
      {/*        ? { borderWidth: 3, borderColor: "transparent" }*/}
      {/*        : { borderWidth: 3, borderColor: "#d35322" },*/}
      {/*    ]}*/}
      {/*  >*/}
      {/*    {saving ? (*/}
      {/*      <View>*/}
      {/*        <Text*/}
      {/*          style={{*/}
      {/*            position: "absolute",*/}
      {/*            bottom: 0,*/}
      {/*            right: 60,*/}
      {/*            width: 100,*/}
      {/*            textAlign: "right",*/}
      {/*            fontStyle: "italic",*/}
      {/*            fontSize: 14,*/}
      {/*            color: "#d35322",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Saving...*/}
      {/*        </Text>*/}

      {/*        <ActivityIndicator size={40} color={"#d35322"} />*/}
      {/*      </View>*/}
      {/*    ) : (*/}
      {/*      <FontAwesome5 name="save" size={30} color="#d35322" />*/}
      {/*    )}*/}
      {/*  </View>*/}
      {/*</TouchableWithoutFeedback>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#b5c1c5",
  },
  headerTitle: {
    marginLeft: 30,
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  statInput: {
    marginBottom: 20,
  },
  saveButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    width: 50,
    aspectRatio: 1,
    borderRadius: 99999,
  },
});

export default StatsScreen;
