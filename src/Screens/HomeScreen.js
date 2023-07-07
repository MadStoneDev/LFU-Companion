import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import HomeHeader from "../Components/HomeHeader";
import HomeRenderItem from "../Components/HomeRenderItem";
import HomeEmptyItem from "../Components/HomeEmptyItem";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import fileManager from "../Helpers/FileManager";

const HomeScreen = ({ navigation }) => {
  // Change this to your own data source
  const data = [
    {
      id: 1,
      title: "Building #1",
      progress: 85,
      theme: "#f8c820",
    },
    {
      id: 2,
      title: "Building #2",
      progress: 35,
      theme: "#c6005f",
    },
    {
      id: 3,
      title: "Building #3",
      progress: 22,
      theme: "#4792ed",
    },
    // {
    //   id: 4,
    //   title: "Building #4",
    //   progress: 22,
    //   theme: "#4792ed",
    // },
    // {
    //   id: 5,
    //   title: "Building #5",
    //   progress: 22,
    //   theme: "#4792ed",
    // },
    // {
    //   id: 6,
    //   title: "Building #6",
    //   progress: 22,
    //   theme: "#4792ed",
    // },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return <HomeRenderItem data={item} navigation={navigation} />;
        }}
        ListHeaderComponent={<HomeHeader navigation={navigation} />}
        ListEmptyComponent={HomeEmptyItem}
      />

      {data.length > 2 ? null : (
        <View style={styles.addButton}>
          <FontAwesome name="plus-circle" size={40} color="#d35322" />
        </View>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

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
    borderWidth: 3,
    borderColor: "#d35322",
    borderRadius: 99999,
  },
});

export default HomeScreen;
