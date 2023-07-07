import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import StatInput from "../Components/StatInput";
import { cleanUpNumber, processKeys } from "../Helpers/CleanUps";

const DiamondsScreen = ({ stats, setStats }) => {
  const [diamonds50, setDiamonds50] = useState("0");
  const [diamonds20, setDiamonds20] = useState("0");
  const [diamonds10, setDiamonds10] = useState("0");

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
              stats[key].toString().length < 1 ? null : (
                <FontAwesome
                  style={{ position: "absolute", left: 10, top: 19 }}
                  name="diamond"
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

export default DiamondsScreen;
