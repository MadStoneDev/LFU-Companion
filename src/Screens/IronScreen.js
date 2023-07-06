import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

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
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"600 Iron Chest"}
        value={iron600}
        placeholder={"eg. 1"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron600(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"300 Iron Chest"}
        value={iron300}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron300(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"100 Iron Chest"}
        value={iron100}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron100(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"30 Iron Chest"}
        value={iron30}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron30(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"6 Iron Chest"}
        value={iron6}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron6(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"3 Iron Chest"}
        value={iron3}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron3(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"2 Iron Chest"}
        value={iron2}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setIron2(text.replace(/[^0-9]/g, ""))}
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

export default IronScreen;
