import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import paints from "../Helpers/paints";
import {
  TextInput as PaperTextInput,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";
import buildingStore from "../Helpers/BuildingStore";
import { saveDataToBuildingFile } from "../Helpers/BuildingsFileManager";

const BuildingScreen = ({ navigation, route }) => {
  const { mode, buildingItem } = route.params;

  // States
  const [buildingName, setBuildingName] = useState("Building Name");
  const [stoneRequired, setStoneRequired] = useState(0);
  const [ironRequired, setIronRequired] = useState(0);
  const [zCoinsRequired, setZCoinsRequired] = useState(0);
  const [diamondsRequired, setDiamondsRequired] = useState(0);
  const [showColour, setShowColour] = useState(false);
  const [showChangeName, setShowChangeName] = useState(false);
  const [selectedPaint, setSelectedPaint] = useState(null);

  const handleSelectPaint = (paint) => {
    setSelectedPaint(paint);
  };

  const randomPaint = () => {
    return paints[Math.floor(Math.random() * paints.length)];
  };

  const setPaint = () => {
    if (mode === "new") {
      // Select a random paint
      setSelectedPaint(randomPaint());
    } else {
      setSelectedPaint(
        paints.includes(buildingItem.colour)
          ? buildingItem.colour
          : randomPaint()
      );
    }
  };

  useEffect(() => {
    setPaint();

    if (mode === "edit") {
      setBuildingName(buildingItem.name);
      setStoneRequired(buildingItem.stoneRequired);
      setIronRequired(buildingItem.ironRequired);
      setZCoinsRequired(buildingItem.zCoinsRequired);
      setDiamondsRequired(buildingItem.diamondsRequired);
    }
  }, []);

  return (
    <Provider>
      <SafeAreaView style={styles.screenWrap}>
        <Portal>
          <Modal
            visible={showColour}
            onDismiss={() => setShowColour(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              marginHorizontal: 30,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {paints.map((paint) => (
                <TouchableWithoutFeedback
                  key={paint}
                  onPress={() => handleSelectPaint(paint)}
                >
                  <View
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 15,
                      width: 45,
                      height: 45,
                      borderRadius: 10,
                      borderColor: paint,
                      borderWidth: paint === selectedPaint ? 2 : 0,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={[
                        {
                          backgroundColor: paint,
                          top: -30,
                          left: -30,
                          width: 60,
                          aspectRatio: 1,

                          transform: [{ rotate: "45deg" }],
                        },
                      ]}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </Modal>

          <Modal
            visible={showChangeName}
            onDismiss={() => setShowChangeName(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              margin: 30,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <PaperTextInput
                style={{
                  flex: 1,
                  height: 35,
                  padding: 0,
                  backgroundColor: "white",
                }}
                label={"Username"}
                mode={"outlined"}
                textColor={"black"}
                activeOutlineColor={"#d35322"}
                outlineColor={"#d35322"}
                value={buildingName}
                onChangeText={(text) => setBuildingName(text)}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowChangeName(false);
                }}
              >
                <Ionicons name="checkbox-sharp" size={30} color="#d35322" />
              </TouchableWithoutFeedback>
            </View>
          </Modal>
        </Portal>

        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              setShowColour(true);
            }}
          >
            <View>
              <View
                style={{
                  top: -35,
                  left: -35,
                  width: 70,
                  aspectRatio: 1,

                  backgroundColor: selectedPaint,

                  transform: [{ rotate: "45deg" }],
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 20,
                  left: 35,
                  color: selectedPaint,
                }}
              >
                Change Colour
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <ScrollView style={{ width: "100%" }}>
            <View style={{ marginHorizontal: 30, justifyContent: "center" }}>
              <Text style={styles.headerTitle}>{buildingName}</Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowChangeName(true);
                }}
              >
                <View style={{ position: "absolute", top: 20, right: 0 }}>
                  <FontAwesome name="pencil-square" size={30} color="black" />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ margin: 30, marginTop: 40 }}>
              <Text style={{ marginBottom: 10 }}>
                Requirements for next build/upgrade:
              </Text>
              <View>
                <Entypo
                  style={{ position: "absolute", left: 4, top: 5, zIndex: 1 }}
                  name="basecamp"
                  size={17}
                  color="black"
                />
                <TextInput
                  style={styles.resourceInput}
                  placeholder={"Stone Required"}
                  value={stoneRequired.toString()}
                  keyboardType={"number-pad"}
                  onChangeText={(text) =>
                    setStoneRequired(isNaN(parseInt(text)) ? 0 : parseInt(text))
                  }
                />
              </View>

              <View>
                <MaterialCommunityIcons
                  style={{ position: "absolute", left: 0, top: -2, zIndex: 1 }}
                  name="gold"
                  size={23}
                  color="black"
                />
                <TextInput
                  style={styles.resourceInput}
                  placeholder={"Iron Required"}
                  value={ironRequired.toString()}
                  keyboardType={"number-pad"}
                  onChangeText={(text) =>
                    setIronRequired(isNaN(parseInt(text)) ? 0 : parseInt(text))
                  }
                />
              </View>

              <View>
                <FontAwesome5
                  style={{ position: "absolute", left: 3, top: 3, zIndex: 1 }}
                  name="coins"
                  size={18}
                  color="black"
                />

                <TextInput
                  style={styles.resourceInput}
                  placeholder={"zCoins Required"}
                  value={zCoinsRequired.toString()}
                  keyboardType={"number-pad"}
                  onChangeText={(text) =>
                    setZCoinsRequired(
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  }
                />
              </View>

              <View>
                <FontAwesome
                  style={{ position: "absolute", left: 3, top: 3, zIndex: 1 }}
                  name="diamond"
                  size={18}
                  color="black"
                />

                <TextInput
                  style={styles.resourceInput}
                  placeholder={"Diamonds Required"}
                  value={diamondsRequired.toString()}
                  keyboardType={"number-pad"}
                  onChangeText={(text) =>
                    setDiamondsRequired(
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  }
                />
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row-reverse",
                  alignItems: "flex-end",
                }}
              >
                <TouchableWithoutFeedback
                  onPress={async () => {
                    if (mode === "new") {
                      buildingStore.addNewBuilding(
                        buildingName,
                        selectedPaint,
                        stoneRequired,
                        ironRequired,
                        zCoinsRequired,
                        diamondsRequired
                      );
                    } else {
                      buildingStore.updateBuilding(
                        buildingItem.id,
                        buildingName,
                        selectedPaint,
                        stoneRequired,
                        ironRequired,
                        zCoinsRequired,
                        diamondsRequired
                      );
                    }

                    await saveDataToBuildingFile(buildingStore);
                    navigation.navigate("Home");
                  }}
                >
                  <Text
                    style={{
                      padding: 7,
                      paddingHorizontal: 35,
                      borderWidth: 1,
                      borderColor: "#555",
                      borderRadius: 5,
                    }}
                  >
                    Save
                  </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      padding: 7,
                      paddingHorizontal: 25,
                      color: "red",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableWithoutFeedback>
              </View>

              {/*<View*/}
              {/*  style={{*/}
              {/*    marginTop: 20,*/}
              {/*    flexDirection: "row",*/}
              {/*    flexWrap: "wrap",*/}
              {/*    justifyContent: "space-between",*/}
              {/*    gap: 10,*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {paints.map((paint) => {*/}
              {/*    return (*/}
              {/*      <Chip*/}
              {/*        icon={() => (*/}
              {/*          <FontAwesome*/}
              {/*            name="paint-brush"*/}
              {/*            size={18}*/}
              {/*            color={selectedPaint === paint ? "white" : paint}*/}
              {/*          />*/}
              {/*        )}*/}
              {/*        mode={"outlined"}*/}
              {/*        selectedColor={paint}*/}
              {/*        style={{*/}
              {/*          backgroundColor: selectedPaint === paint ? paint : "white",*/}
              {/*        }}*/}
              {/*        onPress={() => setSelectedPaint(paint)}*/}
              {/*      ></Chip>*/}
              {/*    );*/}
              {/*  })}*/}
              {/*</View>*/}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  headerTitle: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
  },
  resourceInput: {
    marginBottom: 30,
    paddingLeft: 35,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    color: "black",
  },
});

export default BuildingScreen;
