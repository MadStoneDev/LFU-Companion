import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";

const IronScreen = () => {
  const [iron600, setIron600] = useState("0");
  const [iron300, setIron300] = useState("0");
  const [iron100, setIron100] = useState("0");
  const [iron30, setIron30] = useState("0");
  const [iron6, setIron6] = useState("0");
  const [iron3, setIron3] = useState("0");
  const [iron2, setIron2] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"600 Iron Chest"}
        value={iron600}
        onChangeValue={(text) => {
          setIron600(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"300 Iron Chest"}
        value={iron300}
        onChangeValue={(text) => {
          setIron300(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"100 Iron Chest"}
        value={iron100}
        onChangeValue={(text) => {
          setIron100(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"30 Iron Chest"}
        value={iron30}
        onChangeValue={(text) => {
          setIron30(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"6 Iron Chest"}
        value={iron6}
        onChangeValue={(text) => {
          setIron6(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"3 Iron Chest"}
        value={iron3}
        onChangeValue={(text) => {
          setIron3(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
            color="black"
          />
        }
      />

      <StatInput
        label={"2 Iron Chest"}
        value={iron2}
        onChangeValue={(text) => {
          setIron2(cleanUpNumber(text));
        }}
        icon={
          <MaterialCommunityIcons
            style={{ position: "absolute", left: 10, top: 16 }}
            name="gold"
            size={20}
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

export default IronScreen;
