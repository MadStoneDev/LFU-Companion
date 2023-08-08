import {
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Text,
} from "react-native";
import HomeRenderItem from "../Components/HomeRenderItem";
import HomeEmptyItem from "../Components/HomeEmptyItem";
import { useEffect, useState } from "react";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import resourceStore from "../Helpers/MobX/ResourceStore";
import buildingStore from "../Helpers/MobX/BuildingStore";
import DraggableFlatList from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import { saveDataToFile } from "../Helpers/FileManager";

const TrackerScreen = observer(({ navigation }) => {
  // mobX
  const { buildings } = buildingStore;

  useEffect(() => {
    buildingStore.getBuildingProgress();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#d35322" />
        </Pressable>

        <Text style={styles.headerTitle}>Building Tracker</Text>
      </View>

      <GestureHandlerRootView
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#eee" }}
      >
        <DraggableFlatList
          data={buildings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => {
            return <HomeRenderItem data={item} navigation={navigation} />;
          }}
          // ListHeaderComponent={
          //   <HomeHeader navigation={navigation} modalVisible={setVisible} />
          // }
          ListEmptyComponent={HomeEmptyItem}
          onDragEnd={(data) => {
            buildingStore.updateAllBuildings(data.data);
          }}
        />
      </GestureHandlerRootView>

      {buildings.length > 2 ? null : (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Building", { mode: "new" })}
        >
          <View style={styles.addButton}>
            <FontAwesome name="plus-circle" size={40} color="#d35322" />
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "800",
    color: "#d35322",
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

export default TrackerScreen;
