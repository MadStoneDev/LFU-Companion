import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

const ZCoinsScreen = () => {
  const [zCoins500, setZCoins500] = useState("0");
  const [zCoins100, setZCoins100] = useState("0");
  const [zCoins50, setZCoins50] = useState("0");
  const [zCoins15, setZCoins15] = useState("0");
  const [zCoins5, setZCoins5] = useState("0");
  const [zCoins1, setZCoins1] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"500 ZCoins Chest"}
        value={zCoins500}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins500(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"150 ZCoins Chest"}
        value={zCoins100}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins100(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"50 ZCoins Chest"}
        value={zCoins50}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins50(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"15 ZCoins Chest"}
        value={zCoins15}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins15(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"5 ZCoins Chest"}
        value={zCoins5}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins5(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"1 ZCoin Chest"}
        value={zCoins1}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setZCoins1(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
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
  statInput: {
    marginBottom: 10,
    height: 40,
  },
});

export default ZCoinsScreen;
