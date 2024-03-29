import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import TrackerScreen from "../Screens/TrackerScreen";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import SingleStat from "../Components/SingleStat";
import { observer } from "mobx-react";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import resourceStore from "../Helpers/MobX/ResourceStore";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Dashboard from "../Screens/Dashboard";
import StatsScreen from "../Screens/StatsScreen";
import { CardStyleInterpolators } from "@react-navigation/stack";
import VotingScreen from "../Screens/VotingScreen";

const Drawer = createDrawerNavigator();

const DrawerContent = observer((props) => {
  const navigation = useNavigation();

  // MobX
  const { username, totalStone, totalIron, totalZCoins, totalDiamonds } =
    resourceStore;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.topContent}>{username}</Text>

        <TouchableWithoutFeedback onPress={() => props.showModal(true)}>
          <View
            style={{
              position: "absolute",
              padding: 5,
              flexDirection: "row",
              right: 5,
              bottom: 15,
            }}
          >
            <FontAwesome5 name="user-edit" size={24} color="#d35322" />
          </View>
        </TouchableWithoutFeedback>
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
              padding: 5,
              flexDirection: "row",
              right: 10,
              bottom: 6,
            }}
          >
            <FontAwesome name="pencil-square" size={30} color="white" />
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
              Gathering Timer
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
              Upgrades Calculator
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

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("OnBoarding")}
        >
          <View style={styles.onBoardingButton}>
            <FontAwesome name="question-circle" size={40} color="#bbb" />
          </View>
        </TouchableWithoutFeedback>
      </DrawerContentScrollView>

      {/*<View style={styles.bottomContent}>*/}
      {/*  <SignedIn>*/}
      {/*    <TouchableWithoutFeedback*/}
      {/*      onPress={() => navigation.navigate("Voting")}*/}
      {/*    >*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          paddingTop: 3,*/}
      {/*          fontWeight: "500",*/}
      {/*          fontSize: 14,*/}
      {/*          color: "#6d6d6d",*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        Vote for Next Feature*/}
      {/*      </Text>*/}
      {/*    </TouchableWithoutFeedback>*/}
      {/*  </SignedIn>*/}

      {/*  <SignedOut>*/}
      {/*    <TouchableWithoutFeedback*/}
      {/*      onPress={() => navigation.navigate("Sign Up")}*/}
      {/*    >*/}
      {/*      <View style={{ flexDirection: "row", gap: 5 }}>*/}
      {/*        <MaterialIcons name="account-circle" size={24} color="#d35322" />*/}
      {/*        <Text*/}
      {/*          style={{*/}
      {/*            paddingTop: 3,*/}
      {/*            fontWeight: "500",*/}
      {/*            fontSize: 14,*/}
      {/*            color: "#6d6d6d",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Register a free sync account*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*    </TouchableWithoutFeedback>*/}
      {/*  </SignedOut>*/}
      {/*</View>*/}
    </SafeAreaView>
  );
});

const HomeDrawer = ({ showModal }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent showModal={showModal} {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEdgeWidth: 50,

        drawerActiveTintColor: "#d35322",
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Building Tracker" component={TrackerScreen} />
      {/*<Drawer.Screen name="Event Calendar" component={TrackerScreen} />*/}
      {/*<Drawer.Screen name="Upgrades Calculator" component={TrackerScreen} />*/}
      {/*<Drawer.Screen name="Gathering Timer" component={TrackerScreen} />*/}
      {/*<Drawer.Screen name="Alliance Duel Guide" component={TrackerScreen} />*/}
      {/*<Drawer.Screen name="Timer" component={TrackerScreen} />*/}

      <Drawer.Screen
        name={"Statistics"}
        component={StatsScreen}
        options={{
          drawerItemStyle: { display: "none" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Drawer.Screen
        name="Voting"
        component={VotingScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />
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
  onBoardingButton: {
    display: "flex",
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    left: 10,
    width: 50,
    aspectRatio: 1,
    borderColor: "#d35322",
    borderRadius: 99999,
  },
});

export default HomeDrawer;
