import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, StyleSheet, View } from "react-native";
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

const Tabs = createMaterialTopTabNavigator();

const StatsScreen = ({ navigation }) => {
  //  States
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    // replace this with loaded data
    mainStone: 0,
    mainIron: 0,
    mainZCoins: 0,
    mainDiamonds: 0,
    stone5000: 0,
    stone1000: 0,
    stone500: 0,
    stone150: 0,
    stone50: 0,
    stone10: 0,
    stone5: 0,
    stone2: 0,
    iron300: 0,
    iron100: 0,
    iron30: 0,
    iron6: 0,
    iron3: 0,
    iron2: 0,
    zCoins500: 0,
    zCoins100: 0,
    zCoins50: 0,
    zCoins15: 0,
    zCoins5: 0,
    zCoins1: 0,
    diamonds50: 0,
    diamonds20: 0,
    diamonds10: 0,
  });

  const handleChange = (handle, value) => {
    const tempData = data;
    tempData[handle] = value;
    setData(tempData);
  };

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
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
    borderWidth: 3,
    borderColor: "#d35322",
    borderRadius: 99999,
  },
});

export default StatsScreen;
