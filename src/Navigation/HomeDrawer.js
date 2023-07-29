import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import SingleStat from "../Components/SingleStat";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/ResourceStore";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "../Screens/Dashboard";

const Drawer = createDrawerNavigator();

const DrawerContent = observer((props) => {
  // MobX
  const { username, totalStone, totalIron, totalZCoins, totalDiamonds } =
    resourceStore;
  console.log(props);
  // const setModalVisible = props.setModalVisible;
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.topContent}>Hi {username}</Text>

        {/*<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      position: "absolute",*/}
        {/*      flexDirection: "row",*/}
        {/*      right: 10,*/}
        {/*      bottom: 15,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <FontAwesome5 name="user-edit" size={22} color="#d35322" />*/}
        {/*  </View>*/}
        {/*</TouchableWithoutFeedback>*/}
      </View>
      <View style={styles.statsContent}>
        <View>
          <SingleStat data={totalStone} description={"Stone"} />
          <SingleStat
            data={totalIron}
            description={"Iron"}
            customStyles={{ left: -6 }}
          />
          <SingleStat data={totalZCoins} description={"Z Coins"} />
          <SingleStat
            data={totalDiamonds}
            description={"Diamonds"}
            customStyles={{ left: -2 }}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Statistics")}
        >
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              right: 18,
              bottom: 12,
            }}
          >
            <FontAwesome name="pencil-square" size={26} color="white" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <DrawerContentScrollView style={{ marginTop: -10, marginBottom: 50 }}>
        <DrawerItemList {...props} />
        <View style={{ padding: 18 }}>
          <View style={{ paddingBottom: 18 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Event Calendar
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 0,
                color: "#aaa",
                fontStyle: "italic",
              }}
            >
              Coming Soon
            </Text>
          </View>

          <View style={{ paddingVertical: 18, justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Construction Calculator
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 0,
                color: "#aaa",
                fontStyle: "italic",
              }}
            >
              Coming Soon
            </Text>
          </View>

          <View style={{ paddingVertical: 18, justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Resource Forecaster
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 0,
                color: "#aaa",
                fontStyle: "italic",
              }}
            >
              Coming Soon
            </Text>
          </View>

          <View style={{ paddingVertical: 18, justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Notes
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 0,
                color: "#aaa",
                fontStyle: "italic",
              }}
            >
              Coming Soon
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomContent}>
        {/*  <Text>Account</Text>*/}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Account")}
        >
          <View
            style={{ flexDirection: "row", alignContent: "center", gap: 5 }}
          >
            <AntDesign name="checksquare" size={24} color="#6d6d6d" />
            <Text
              style={{
                paddingTop: 3,
                fontWeight: "500",
                fontSize: 14,
                color: "#6d6d6d",
              }}
            >
              Vote for Next Feature
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
});

const HomeDrawer = ({ navigation, route }) => {
  const { setModalVisible } = route.params;

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent {...props} setModalVisible={setModalVisible} />
      )}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEdgeWidth: 200,

        drawerActiveTintColor: "#d35322",
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Building Tracker" component={HomeScreen} />
      {/*<Drawer.Screen name="Event Calendar" component={HomeScreen} />*/}
      {/*<Drawer.Screen name="Construction Calculator" component={HomeScreen} />*/}
      {/*<Drawer.Screen name="Alliance Duel Guide" component={HomeScreen} />*/}
      {/*<Drawer.Screen name="Timer" component={HomeScreen} />*/}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  topContent: {
    padding: 18,
    paddingTop: 30,
    color: "#d35322",
    fontSize: 17,
    fontWeight: "bold",
  },
  statsContent: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: "#d35322",
  },
  bottomContent: {
    position: "absolute",
    marginHorizontal: 20,
    paddingVertical: 18,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default HomeDrawer;
