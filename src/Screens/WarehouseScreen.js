import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

const WarehouseScreen = () => {
  const [mainStone, setMainStone] = useState("0");
  const [mainIron, setMainIron] = useState("0");
  const [mainZCoins, setMainZCoins] = useState("0");
  const [mainDiamonds, setMainDiamonds] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={styles.statInput}
          mode={"outlined"}
          label={"Stone in Warehouse"}
          value={mainStone}
          placeholder={"eg. 1"}
          activeOutlineColor={"#47656d"}
          onChangeText={(text) => setMainStone(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        ></TextInput>
      </View>

      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"Iron in Warehouse"}
        value={mainIron}
        placeholder={"eg. 1"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setMainIron(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"Z Coins in Warehouse"}
        value={mainZCoins}
        placeholder={"eg. 1"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setMainZCoins(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"Diamonds in Warehouse"}
        value={mainDiamonds}
        placeholder={"eg. 1"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setMainDiamonds(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
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
  statInput: {
    marginBottom: 10,
    height: 40,
  },
});

export default WarehouseScreen;
