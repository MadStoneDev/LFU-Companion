import {
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import BuildingTitle from "../Components/BuildingTitle";
import paints from "../Helpers/paints";
import PaintChip from "../Components/PaintChip";
import {
  TextInput as PaperTextInput,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";

const BuildingScreen = ({ navigation, route }) => {
  // States
  const [buildingName, setBuildingName] = useState("Building Name");
  const [stoneRequired, setStoneRequired] = useState(0);
  const [ironRequired, setIronRequired] = useState(0);
  const [zCoinsRequired, setZCoinsRequired] = useState(0);
  const [diamondsRequired, setDiamondsRequired] = useState(0);
  const [showColour, setShowColour] = useState(false);
  const [showChangeName, setShowChangeName] = useState(false);

  const { mode } = route.params;

  useEffect(() => {}, []);

  return (
    <Provider>
      <SafeAreaView style={styles.screenWrap}>
        <Portal>
          <Modal
            visible={showColour}
            onDismiss={() => setShowColour(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              margin: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            ></View>
          </Modal>

          <Modal
            visible={showChangeName}
            onDismiss={() => setShowChangeName(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              margin: 20,
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
          <View style={[{ backgroundColor: "red" }, styles.colourTab]} />
          <Text
            style={{ position: "absolute", top: 20, left: 35, color: "red" }}
          >
            Change Colour
          </Text>
          <ScrollView>
            <View style={{ marginHorizontal: 30, justifyContent: "center" }}>
              <Text style={styles.headerTitle}>{buildingName}</Text>
              <TouchableWithoutFeedback onPress={() => setShowChangeName(true)}>
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
                  onChangeText={(text) => setStoneRequired(parseInt(text))}
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
                  onChangeText={(text) => setIronRequired(parseInt(text))}
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
                  onChangeText={(text) => setZCoinsRequired(parseInt(text))}
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
                  onChangeText={(text) => setDiamondsRequired(parseInt(text))}
                />
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row-reverse",
                  alignItems: "flex-end",
                }}
              >
                <TouchableWithoutFeedback>
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
    paddingBottom: 10,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
  },
  colourTab: {
    top: -35,
    left: -35,
    width: 70,
    aspectRatio: 1,

    transform: [{ rotate: "45deg" }],
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
