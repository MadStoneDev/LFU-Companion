import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";

const ZCoinsScreen = () => {
  const [zCoins500, setZCoins500] = useState("0");
  const [zCoins100, setZCoins100] = useState("0");
  const [zCoins50, setZCoins50] = useState("0");
  const [zCoins15, setZCoins15] = useState("0");
  const [zCoins5, setZCoins5] = useState("0");
  const [zCoins1, setZCoins1] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"500 Iron Chest"}
        value={zCoins500}
        onChangeValue={(text) => {
          setZCoins500(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"100 Iron Chest"}
        value={zCoins100}
        onChangeValue={(text) => {
          setZCoins100(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"50 Iron Chest"}
        value={zCoins50}
        onChangeValue={(text) => {
          setZCoins50(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"15 Iron Chest"}
        value={zCoins15}
        onChangeValue={(text) => {
          setZCoins15(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"5 Iron Chest"}
        value={zCoins5}
        onChangeValue={(text) => {
          setZCoins5(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"5 Iron Chest"}
        value={zCoins5}
        onChangeValue={(text) => {
          setZCoins5(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"1 Iron Chest"}
        value={zCoins1}
        onChangeValue={(text) => {
          setZCoins1(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="coins"
            size={15}
            color="black"
          />
        }
      />

      <View style={{ height: 50 }}></View>
    </ScrollView>
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
});

export default ZCoinsScreen;
