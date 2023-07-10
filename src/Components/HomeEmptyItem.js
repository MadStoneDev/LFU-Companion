import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeEmptyItem = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 60,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#b1b1b1", fontStyle: "italic" }}>
        No building is currently being tracked.
      </Text>
      <View>
        <Text style={{ color: "#b1b1b1", fontStyle: "italic" }}>
          Tap the big{" "}
          <View
            style={{
              transform: "translateY(3px)",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="plus-circle" size={17} color="#d35322" />
          </View>{" "}
          to start.
        </Text>
      </View>
    </View>
  );
};

export default HomeEmptyItem;
