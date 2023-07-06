import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

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
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"5000 Stone Chest"}
        value={stone5000}
        placeholder={"eg. 1"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone5000(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"1000 Stone Chest"}
        value={stone1000}
        placeholder={"eg. 2"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone1000(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"500 Stone Chest"}
        value={stone500}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone500(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"150 Stone Chest"}
        value={stone150}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone150(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"50 Stone Chest"}
        value={stone50}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone50(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"10 Stone Chest"}
        value={stone10}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone10(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"5 Stone Chest"}
        value={stone5}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone5(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"2 Stone Chest"}
        value={stone2}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setStone2(text.replace(/[^0-9]/g, ""))}
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

export default StoneScreen;
