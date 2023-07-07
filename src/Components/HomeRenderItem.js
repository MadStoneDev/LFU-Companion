import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";

const HomeRenderItem = ({ data, navigation }) => {
  const item = data.item;

  let progressStr = item.progress + "%";

  return (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() =>
        navigation.navigate("Building", {
          buildingItem: item,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          {/*<View style={styles.cardIcon}></View>*/}
          <View style={styles.cardDesc}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Progress: {item.progress}%</Text>
            <View style={styles.progressWrapper}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: progressStr,
                    backgroundColor: item.theme,
                  },
                ]}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
    // marginLeft: 10,
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
});

export default HomeRenderItem;