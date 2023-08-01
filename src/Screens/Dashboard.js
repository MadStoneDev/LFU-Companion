import {
  Pressable,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import ServerTime from "../Components/ServerTime";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import ResourceStore from "../Helpers/ResourceStore";
import { useState } from "react";

const Dashboard = observer(() => {
  // mobX
  const { username } = ResourceStore;

  const [showTimeLeft, setShowTimeLeft] = useState(false);

  const navigation = useNavigation();

  const tools = [
    {
      title: "Update Resources",
      icon: (
        <MaterialCommunityIcons
          name="treasure-chest"
          size={40}
          color="#d35322"
        />
      ),
      action: () => {
        navigation.openDrawer();
      },
      disabled: false,
    },
    {
      title: "Building Tracker",
      icon: (
        <MaterialCommunityIcons
          name="office-building-cog"
          size={40}
          color="#d35322"
        />
      ),
      action: () => {
        navigation.navigate("Building Tracker");
      },
      disabled: false,
    },
    {
      title: "Gathering Timer",
      icon: <MaterialCommunityIcons name="pickaxe" size={40} color="#777" />,
      screen: "Gathering Timer",
      action: null,
      disabled: true,
    },
    {
      title: "Upgrades Calculator",
      icon: (
        <MaterialCommunityIcons
          name="calculator-variant"
          size={40}
          color="#777"
        />
      ),
      screen: "Upgrades Calculator",
      action: null,
      disabled: true,
    },
    {
      title: "Event Calendar",
      icon: (
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={40}
          color="#777"
        />
      ),
      screen: "Event Calendar",
      action: null,
      disabled: true,
    },
  ];

  const switchTime = () => setShowTimeLeft(!showTimeLeft);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            {/*<Entypo name="menu" size={28} color="#d35322" />*/}
            <MaterialIcons name="article" size={28} color="#d35322" />
          </Pressable>

          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>

        {/*<Pressable*/}
        {/*  onPress={() => {*/}
        {/*    navigation.openDrawer();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <MaterialCommunityIcons*/}
        {/*    name="account-circle"*/}
        {/*    size={30}*/}
        {/*    color="#d35322"*/}
        {/*  />*/}
        {/*</Pressable>*/}
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 26,
            color: "#555",
          }}
        >
          Welcome, {username}!
        </Text>
      </View>

      <View
        style={{
          margin: 20,
          marginTop: 30,
          backgroundColor: "#fbfbfb",
          borderRadius: 15,
          elevation: 6,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableWithoutFeedback onPress={() => switchTime()}>
            <Text
              style={{
                padding: 10,
                marginBottom: -12,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: "#eee",
                alignItems: "center",
                fontSize: 14,
                fontWeight: "500",
                color: "#555",
                elevation: 3,
              }}
            >
              {showTimeLeft ? "Time Until Next Reset" : "Server Time"}
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={() => switchTime()}>
          <View
            style={{
              position: "absolute",
              padding: 10,
              paddingRight: 15,
              right: 0,
              zIndex: 1,
            }}
          >
            <Entypo name="cycle" size={24} color="#d35322" />
          </View>
        </TouchableWithoutFeedback>

        <ServerTime showTimeLeft={showTimeLeft} />
      </View>

      <ScrollView>
        <Text
          style={{
            marginLeft: 20,
            marginBottom: -20,
            fontSize: 14,
            fontWeight: "600",
            color: "#555",
            opacity: 0.5,
          }}
        >
          Choose Tool
        </Text>

        <ScrollView
          style={{
            marginVertical: 10,
          }}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            overflow: "visible",
            gap: 15,
          }}
          horizontal={true}
        >
          {/*<Text>Hello</Text>*/}
          {tools.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={item.action}>
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  flexDirection: "column",
                  alignItems: "center",
                  width: 120,
                  backgroundColor: item.disabled ? "#e1e1e1" : "#fbfbfb",
                  borderRadius: 15,
                  elevation: item.disabled ? 0 : 6,
                }}
              >
                <View style={{ marginBottom: 10 }}>{item.icon}</View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "500",
                    color: item.disabled ? "#777" : "#000",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>

        <Text
          style={{
            marginTop: -10,
            marginLeft: 20,
            fontSize: 14,
            fontWeight: "600",
            color: "#555",
            opacity: 0.5,
          }}
        >
          Did you know?
        </Text>

        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <Text
            style={{
              padding: 15,
              backgroundColor: "#ddd",
              borderRadius: 10,
              textAlign: "center",
              fontSize: 14,
              lineHeight: 20,
              color: "#555",
            }}
          >
            You can open the drawer menu by swiping from the left edge of your
            screen
          </Text>
        </View>
      </ScrollView>

      <View
        style={{ position: "absolute", padding: 20, bottom: 0, width: "100%" }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Voting")}>
          <View
            style={{
              bottom: 0,
            }}
          >
            <Text
              style={{
                padding: 15,
                marginHorizontal: 20,
                backgroundColor: "#d35322",
                borderRadius: 999,
                textAlign: "center",
                fontWeight: "600",
                fontSize: 15,
                color: "#fff",
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee" },
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "800",
    color: "#d35322",
  },
});

export default Dashboard;
