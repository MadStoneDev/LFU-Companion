import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";

const DiamondsScreen = () => {
  const [diamonds50, setDiamonds50] = useState("0");
  const [diamonds20, setDiamonds20] = useState("0");
  const [diamonds10, setDiamonds10] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"50 Diamonds"}
        value={diamonds50}
        onChangeValue={(text) => {
          setDiamonds50(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome
            style={{ position: "absolute", left: 10, top: 19 }}
            name="diamond"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"20 Diamonds"}
        value={diamonds20}
        onChangeValue={(text) => {
          setDiamonds20(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome
            style={{ position: "absolute", left: 10, top: 19 }}
            name="diamond"
            size={15}
            color="black"
          />
        }
      />

      <StatInput
        label={"10 Diamonds"}
        value={diamonds10}
        onChangeValue={(text) => {
          setDiamonds10(cleanUpNumber(text));
        }}
        icon={
          <FontAwesome
            style={{ position: "absolute", left: 10, top: 19 }}
            name="diamond"
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

export default DiamondsScreen;
