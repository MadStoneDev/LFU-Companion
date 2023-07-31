import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import buildingStore from "../Helpers/BuildingStore";
import { observer } from "mobx-react";
import { ScaleDecorator } from "react-native-draggable-flatlist/src/components/CellDecorators";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeRenderItem = observer(({ data, navigation }) => {
  const thisItem = data.item;
  let progressStr =
    (isNaN(buildingStore.progresses[thisItem.id])
      ? 0
      : buildingStore.progresses[thisItem.id]) + "%";

  return (
    <ScaleDecorator>
      <TouchableWithoutFeedback
        key={thisItem.id}
        onLongPress={() => data.drag()}
        disabled={data.isActive}
        onPress={() =>
          navigation.navigate("Building", {
            mode: "edit",
            buildingItem: thisItem,
          })
        }
      >
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.cardIcon}>
              <MaterialCommunityIcons
                name="treasure-chest"
                size={30}
                color={thisItem.colour}
              />
            </View>
            <View style={styles.cardDesc}>
              <Text style={styles.title}>{thisItem.name}</Text>
              <Text style={styles.subtitle}>Progress: {progressStr}</Text>
              <View style={styles.progressWrapper}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: progressStr,
                      backgroundColor: thisItem.colour,
                    },
                  ]}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScaleDecorator>
  );
});

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
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
    alignItems: "center",
    gap: 10,
  },
  cardDesc: {
    flex: 1,
    marginLeft: 5,
  },
  cardIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    aspectRatio: 1,
    backgroundColor: "#eee",
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
});

export default HomeRenderItem;
