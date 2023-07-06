import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { FontAwesome5 } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";

const WarehouseScreen = () => {
  const [mainStone, setMainStone] = useState("0");
  const [mainIron, setMainIron] = useState("0");
  const [mainZCoins, setMainZCoins] = useState("0");
  const [mainDiamonds, setMainDiamonds] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"1 in Warehouse"}
        value={mainStone}
        onChangeValue={(text) => {
          setMainStone(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="warehouse"
            size={13}
            color="black"
          />
        }
      />

      <StatInput
        label={"Iron in Warehouse"}
        value={mainIron}
        onChangeValue={(text) => {
          setMainIron(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="warehouse"
            size={13}
            color="black"
          />
        }
      />

      <StatInput
        label={"ZCoins in Warehouse"}
        value={mainZCoins}
        onChangeValue={(text) => {
          setMainZCoins(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="warehouse"
            size={13}
            color="black"
          />
        }
      />

      <StatInput
        label={"Diamonds in Warehouse"}
        value={mainDiamonds}
        onChangeValue={(text) => {
          setMainDiamonds(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome5
            style={{ position: "absolute", left: 10, top: 20 }}
            name="warehouse"
            size={13}
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

export default WarehouseScreen;
