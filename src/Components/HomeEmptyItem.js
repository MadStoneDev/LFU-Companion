import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons";

const HomeEmptyItem = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 60,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#b1b1b1" }}>
        No building is currently being tracked.
      </Text>
      <Text style={{ color: "#b1b1b1" }}>
        Tap the big <FontAwesome name="plus-circle" size={17} color="#d35322" />{" "}
        to start.
      </Text>
    </View>
  );
};

export default HomeEmptyItem;
