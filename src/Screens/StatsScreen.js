import { useState } from "react";
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
import { processKeys } from "../Helpers/CleanUps";

const Tabs = createMaterialTopTabNavigator();

const StatsScreen = ({ navigation }) => {
  //  States
  const [saving, setSaving] = useState(false);

  const [warehouseStats, setWarehouseStats] = useState({
    stone: 0,
    iron: 0,
    zCoins: 0,
    diamonds: 0,
  });

  const [stoneStats, setStoneStats] = useState({
    stone5000: 0,
    stone1000: 0,
    stone500: 0,
    stone150: 0,
    stone50: 0,
    stone10: 0,
    stone5: 0,
    stone2: 0,
  });

  const [ironStats, setIronStats] = useState({
    iron600: 0,
    iron300: 0,
    iron100: 0,
    iron30: 0,
    iron6: 0,
    iron3: 0,
    iron2: 0,
  });

  const [zCoinsStats, setZCoinsStats] = useState({
    zCoins500: 0,
    zCoins100: 0,
    zCoins50: 0,
    zCoins15: 0,
    zCoins5: 0,
    zCoins1: 0,
  });

  const [diamondStats, setDiamondStats] = useState({
    diamonds50: 0,
    diamonds20: 0,
    diamonds10: 0,
  });

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
          children={() => (
            <WarehouseScreen
              stats={warehouseStats}
              setStats={setWarehouseStats}
            />
          )}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome5 name="warehouse" size={13} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Stone Chests"}
          children={() => (
            <StoneScreen stats={stoneStats} setStats={setStoneStats} />
          )}
          options={{
            tabBarIcon: (focused) => (
              <Entypo name="basecamp" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Iron Chests"}
          children={() => (
            <IronScreen stats={ironStats} setStats={setIronStats} />
          )}
          options={{
            tabBarIcon: (focused) => (
              <MaterialCommunityIcons name="gold" size={20} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Z Coins Chests"}
          children={() => (
            <ZCoinsScreen stats={zCoinsStats} setStats={setZCoinsStats} />
          )}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome5 name="coins" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Diamonds Chest"}
          children={() => (
            <DiamondsScreen stats={diamondStats} setStats={setDiamondStats} />
          )}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome name="diamond" size={15} color="black" />
            ),
          }}
        />
      </Tabs.Navigator>

      <TouchableWithoutFeedback
        onPress={() => {
          setSaving(true);
          setTimeout(() => {
            setSaving(false);
          }, 1500);
        }}
      >
        <View
          style={[
            styles.saveButton,
            saving
              ? { borderWidth: 3, borderColor: "transparent" }
              : { borderWidth: 3, borderColor: "#d35322" },
          ]}
        >
          {saving ? (
            <View>
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 60,
                  width: 100,
                  textAlign: "right",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#d35322",
                }}
              >
                Saving...
              </Text>

              <ActivityIndicator size={40} color={"#d35322"} />
            </View>
          ) : (
            <FontAwesome5 name="save" size={30} color="#d35322" />
          )}
        </View>
      </TouchableWithoutFeedback>
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