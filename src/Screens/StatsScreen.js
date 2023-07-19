import { Pressable, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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

import resourceStore from "../Helpers/ResourceStore";
import { saveDataToFile } from "../Helpers/FileManager";
import buildingStore from "../Helpers/BuildingStore";

const Tabs = createMaterialTopTabNavigator();

const StatsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            saveDataToFile(resourceStore).then(() => {
              console.log("Data saved");
            });

            buildingStore.getBuildingProgress();
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
            backgroundColor: "#d35322",
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
          tabBarStyle: {
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 2,
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
