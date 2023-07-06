import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

const DiamondsScreen = () => {
  const [diamonds50, setDiamonds50] = useState("0");
  const [diamonds20, setDiamonds20] = useState("0");
  const [diamonds10, setDiamonds10] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"50 Diamonds"}
        value={diamonds20}
        placeholder={"eg. 3"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setDiamonds50(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"20 Diamonds"}
        value={diamonds20}
        placeholder={"eg. 2"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setDiamonds20(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>

      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"10 Diamonds"}
        value={diamonds10}
        placeholder={"eg. 5"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setDiamonds10(text.replace(/[^0-9]/g, ""))}
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

export default DiamondsScreen;
