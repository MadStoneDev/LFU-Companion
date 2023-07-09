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
import fileManager from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";

const Tabs = createMaterialTopTabNavigator();

const StatsScreen = ({ route, navigation }) => {
  //  States
  const [saving, setSaving] = useState(false);

  const [totalStone, setTotalStone] = useState(route.params.stoneData);
  const [totalIron, setTotalIron] = useState(route.params.ironData);
  const [totalZCoins, setTotalZCoins] = useState(route.params.zCoinsData);
  const [totalDiamonds, setTotalDiamonds] = useState(route.params.diamondsData);

  const { stone, iron, zCoins, diamonds } = resourceStore;

  const handleWarehouseChange = (resourceType, amount) => {
    resourceStore.updateWarehouseQuantity(resourceType, amount);
  };

  const handleChestChange = (resourceType, quantity, amount) => {
    resourceStore.updateChestQuantity(resourceType, quantity, amount);
  };

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

  const loadStats = async () => {
    return await fileManager.loadData();
  };

  useEffect(() => {
    loadStats().then((r) => {
      setWarehouseStats({
        ...warehouseStats,
        stone: r.stone,
        iron: r.iron,
        zCoins: r.zCoins,
        diamonds: r.diamonds,
      });

      setStoneStats({
        ...stoneStats,
        stone5000: r.stone5000,
        stone1000: r.stone1000,
        stone500: r.stone500,
        stone150: r.stone150,
        stone50: r.stone50,
        stone10: r.stone10,
        stone5: r.stone5,
        stone2: r.stone2,
      });

      setIronStats({
        iron600: r.iron600,
        iron300: r.iron300,
        iron100: r.iron100,
        iron30: r.iron30,
        iron6: r.iron6,
        iron3: r.iron3,
        iron2: r.iron2,
      });

      setZCoinsStats({
        zCoins500: r.zCoins500,
        zCoins100: r.zCoins100,
        zCoins50: r.zCoins50,
        zCoins15: r.zCoins15,
        zCoins5: r.zCoins5,
        zCoins1: r.zCoins1,
      });

      setDiamondStats({
        diamonds50: r.diamonds50,
        diamonds20: r.diamonds20,
        diamonds10: r.diamonds10,
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable
          onPress={() =>
            navigation.navigate("Home", {
              stoneData: totalStone,
              ironData: totalIron,
              zCoinsData: totalZCoins,
              diamondsData: totalDiamonds,
            })
          }
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
