import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";

import SingleStat from "./SingleStat";
import resourceStore from "../Helpers/MobX/ResourceStore";
import { Provider } from "react-native-paper";

const HomeHeader = observer(({ navigation, modalVisible }) => {
  // MobX
  const { username, totalStone, totalIron, totalZCoins, totalDiamonds } =
    resourceStore;

  return (
    <Provider>
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/Header-Background.jpg")}
          resizeMode="cover"
          style={styles.headerImage}
        >
          <View style={styles.headerPanel}>
            <View>
              <Text style={styles.greeting}>Hi {username}</Text>
              <TouchableWithoutFeedback onPress={() => modalVisible(true)}>
                <View
                  style={{
                    position: "absolute",
                    flexDirection: "row",
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <FontAwesome5 name="user-edit" size={22} color="white" />
                </View>
              </TouchableWithoutFeedback>
            </View>
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
              <SingleStat data={totalStone} description={"Stone"} />
              <SingleStat
                data={totalIron}
                description={"Iron"}
                customStyles={{ left: -6 }}
              />
              <SingleStat data={totalZCoins} description={"Z Coins"} />
              <SingleStat
                data={totalDiamonds}
                description={"Diamonds"}
                customStyles={{ left: -2 }}
              />
            </View>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Statistics")}
            >
              <View
                style={{
                  position: "absolute",
                  flexDirection: "row",
                  right: 25,
                  bottom: 15,
                }}
              >
                <FontAwesome name="pencil-square" size={30} color="white" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    </Provider>
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
    shadowOffset: { width: 0, height: 7 },
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
    borderRadius: 999,
    backgroundColor: "#fff",
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
