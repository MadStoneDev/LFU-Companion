import {
  StatusBar,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../Components/HomeHeader";
import HomeRenderItem from "../Components/HomeRenderItem";
import HomeEmptyItem from "../Components/HomeEmptyItem";
import { useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { saveDataToFile } from "../Helpers/FileManager";
import { Modal, Portal, Provider, TextInput } from "react-native-paper";
import resourceStore from "../Helpers/ResourceStore";
import buildingStore from "../Helpers/BuildingStore";
import DraggableFlatList from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { observer } from "mobx-react";

const HomeScreen = observer(({ navigation }) => {
  // Data
  const { username } = resourceStore;
  const { buildings } = buildingStore;

  // States
  const [visible, setVisible] = useState(false);
  const [usernameValue, setUsernameValue] = useState(username);
  const [buildingsValue, setBuildingsValue] = useState(buildings);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    buildingStore.getBuildingProgress();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
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
              <TextInput
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
                value={usernameValue}
                onChangeText={(text) => setUsernameValue(text)}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  resourceStore.updateUsername(usernameValue);
                  saveDataToFile(resourceStore).then(() => {
                    console.log("Saved");
                  });
                  hideModal();
                }}
              >
                <Ionicons name="checkbox-sharp" size={30} color="#d35322" />
              </TouchableWithoutFeedback>
            </View>
          </Modal>
        </Portal>

        <GestureHandlerRootView style={{ flex: 1 }}>
          <DraggableFlatList
            data={buildings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              return <HomeRenderItem data={item} navigation={navigation} />;
            }}
            ListHeaderComponent={
              <HomeHeader navigation={navigation} modalVisible={setVisible} />
            }
            ListEmptyComponent={HomeEmptyItem}
            onDragEnd={(data) => {
              buildingStore.updateAllBuildings(data.data);
              // setBuildingsValue(data.data);
            }}
          />
        </GestureHandlerRootView>

        {/*<FlatList*/}
        {/*  data={buildings}*/}
        {/*  renderItem={(item) => {*/}
        {/*    return <HomeRenderItem data={item} navigation={navigation} />;*/}
        {/*  }}*/}
        {/*  ListHeaderComponent={*/}
        {/*    <HomeHeader navigation={navigation} modalVisible={setVisible} />*/}
        {/*  }*/}
        {/*  ListEmptyComponent={HomeEmptyItem}*/}
        {/*  // ListFooterComponent={*/}
        {/*  //   data.length > 0 && data.length < 2 ? <HomeFooterItem /> : null*/}
        {/*  // }*/}
        {/*/>*/}

        {buildings.length > 1 ? null : (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Building", { mode: "new" })}
          >
            <View style={styles.addButton}>
              <FontAwesome name="plus-circle" size={40} color="#d35322" />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Provider>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    width: 50,
    aspectRatio: 1,
    borderColor: "#d35322",
    borderRadius: 99999,
  },
});

export default HomeScreen;
