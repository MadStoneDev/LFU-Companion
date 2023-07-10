import { Pressable, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Card, Chip, TextInput } from "react-native-paper";
import BuildingTitle from "../Components/BuildingTitle";
import paints from "../Helpers/paints";
import PaintChip from "../Components/PaintChip";

const BuildingScreen = ({ navigation, route }) => {
  // States
  const [selectedPaint, setSelectedPaint] = useState(null);

  const { mode } = route.params;

  const handlePress = (paint) => {
    setSelectedPaint(paint);
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            saveDataToFile(resourceStore).then(() => {
              console.log("Data saved");
            });

            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>

        <Text style={styles.headerTitle}>Track new building</Text>
      </View>

      <View style={{ padding: 20 }}>
        <TextInput mode={"outlined"} label={"Building Name"} />

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          {paints.map((paint) => {
            return (
              <Chip
                icon={() => (
                  <FontAwesome
                    name="paint-brush"
                    size={18}
                    color={selectedPaint === paint ? "white" : paint}
                  />
                )}
                mode={"outlined"}
                selectedColor={paint}
                style={{
                  backgroundColor: selectedPaint === paint ? paint : "white",
                }}
                onPress={() => setSelectedPaint(paint)}
              ></Chip>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
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
});

export default BuildingScreen;
