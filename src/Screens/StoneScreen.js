import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const StoneScreen = () => {
  const [stone5000, setStone5000] = useState("0");
  const [stone1000, setStone1000] = useState("0");
  const [stone500, setStone500] = useState("0");
  const [stone150, setStone150] = useState("0");
  const [stone50, setStone50] = useState("0");
  const [stone10, setStone10] = useState("0");
  const [stone5, setStone5] = useState("0");
  const [stone2, setStone2] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"5000 Stone Chest"}
        value={stone5000}
        onChangeValue={(text) => {
          setStone5000(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"1000 Stone Chest"}
        value={stone1000}
        onChangeValue={(text) => {
          setStone1000(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"500 Stone Chest"}
        value={stone500}
        onChangeValue={(text) => {
          setStone500(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"150 Stone Chest"}
        value={stone150}
        onChangeValue={(text) => {
          setStone150(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"50 Stone Chest"}
        value={stone50}
        onChangeValue={(text) => {
          setStone50(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"10 Stone Chest"}
        value={stone10}
        onChangeValue={(text) => {
          setStone10(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"5 Stone Chest"}
        value={stone5}
        onChangeValue={(text) => {
          setStone5(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"2 Stone Chest"}
        value={stone2}
        onChangeValue={(text) => {
          setStone2(cleanUpNumber(text));
        }}
        icon={
          <Entypo
            style={{ position: "absolute", left: 10, top: 20 }}
            name="basecamp"
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
    marginBottom: 10,
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

export default StoneScreen;
