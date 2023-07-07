import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import StatInput from "../Components/StatInput";
import { capitalise, cleanUpNumber, processKeys } from "../Helpers/CleanUps";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const StoneScreen = ({ stats, setStats }) => {
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
      {Object.keys(stats).map((key) => {
        return (
          <StatInput
            key={key}
            label={processKeys(key)}
            value={stats[key]}
            onChangeValue={(text) => {
              setStats((stats) => ({
                ...stats,
                [key]: cleanUpNumber(text),
              }));
            }}
            icon={
              stats[key] < 1 ? null : (
                <Entypo
                  style={{ position: "absolute", left: 10, top: 20 }}
                  name="basecamp"
                  size={15}
                  color="black"
                />
              )
            }
          />
        );
      })}

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
