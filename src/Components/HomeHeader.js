import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { observer } from "mobx-react";

import SingleStat from "./SingleStat";
import fileManager from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";

const HomeHeader = observer(({ props, navigation }) => {
  // MobX
  const { getTotalAmount } = resourceStore;

  const stoneTotal = getTotalAmount("stone");
  const ironTotal = getTotalAmount("iron");
  const zCoinTotal = getTotalAmount("zCoin");
  const diamondTotal = getTotalAmount("diamond");

  const loadStats = async () => {
    return await fileManager.loadData();
  };

  const updateStats = () => {
    loadStats().then((res) => {
      // setTotalStone(fileManager.getTotalStone());
      // setTotalIron(fileManager.getTotalIron());
      // setTotalZCoins(fileManager.getTotalZCoins());
      // setTotalDiamonds(fileManager.getTotalDiamonds());
    });
  };

  useEffect(() => {
    console.log(props);
    updateStats();
  }, []);

  useEffect(() => {
    updateStats();
  }, []);

  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/Header-Background.jpg")}
        resizeMode="cover"
        style={styles.headerImage}
      >
        <View style={styles.headerPanel}>
          <Text style={styles.greeting}>Hi Edmodantes</Text>
          <View>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 5,
                fontSize: 16,
                color: "white",
              }}
            >
              Current Statistics:
            </Text>
            <SingleStat data={stoneTotal} description={"Stone"} />
            <SingleStat data={ironTotal} description={"Iron"} />
            <SingleStat data={zCoinTotal} description={"Z Coins"} />
            <SingleStat data={diamondTotal} description={"Diamonds"} />
          </View>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Statistics")}
          >
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                right: 20,
                bottom: 15,
              }}
            >
              <FontAwesome name="pencil-square" size={30} color="white" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: -25,
    overflow: "hidden",
  },
  headerImage: {
    paddingBottom: 40,
  },
  headerPanel: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 10,
    elevation: 2,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "75%",
    height: 80,
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 7,
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 7,
    overflow: "hidden",
  },
  cardTop: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  cardDesc: {
    flex: 1,
    marginLeft: 10,
  },
  cardIcon: {
    marginBottom: 10,
    height: 60,
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 999,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  title: {
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    opacity: 0.5,
    fontWeight: "thin",
    fontSize: 12,
  },
  progressWrapper: {
    marginTop: 10,
    width: "100%",
    height: 7,
    backgroundColor: "#e1e1e1",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
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

export default HomeHeader;
