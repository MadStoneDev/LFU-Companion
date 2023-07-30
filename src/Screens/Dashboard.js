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
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import ResourceStore from "../Helpers/ResourceStore";
import { useState } from "react";

const Dashboard = observer(() => {
  // mobX
  const { username } = ResourceStore;

  const [showTimeLeft, setShowTimeLeft] = useState(false);

  const navigation = useNavigation();

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
            <Entypo name="menu" size={28} color="#d35322" />
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

      <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
        <Text style={{ fontWeight: "600", fontSize: 24, color: "#d35322" }}>
          Hi {username}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#d35322",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              padding: 5,
              marginBottom: -12,
              backgroundColor: "white",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: "center",
              fontSize: 14,
              fontWeight: "500",
              color: "#d35322",
            }}
          >
            {showTimeLeft ? "Time Until Next Reset" : "Server Time"}
          </Text>
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
            <Entypo name="cycle" size={24} color="white" />
          </View>
        </TouchableWithoutFeedback>

        <ServerTime showTimeLeft={showTimeLeft} />
        <ScrollView
          style={{
            flex: 1,
            marginBottom: 40,
            backgroundColor: "white",
            borderRadius: 25,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            elevation: 8,
          }}
          contentContainerStyle={{
            padding: 30,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            overflow: "visible",
            gap: 20,
          }}
        >
          {/*<Text>Hello</Text>*/}
          {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (*/}
          {/*  <View*/}
          {/*    key={index}*/}
          {/*    style={{*/}
          {/*      width: "28%",*/}
          {/*      aspectRatio: 1,*/}
          {/*      backgroundColor: "white",*/}
          {/*      borderRadius: 20,*/}
          {/*      elevation: 5,*/}
          {/*    }}*/}
          {/*  ></View>*/}
          {/*))}*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    paddingTop: 30,
    paddingBottom: 50,
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
