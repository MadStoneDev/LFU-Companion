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
      <Text style={{ color: "#b1b1b1" }}>
        No building is currently being tracked.
      </Text>
      <View>
        <Text style={{ color: "#b1b1b1" }}>
          Tap the big{" "}
          <View
            style={{
              transform: "translateY(4px)",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 25,
              height: 25,
              borderWidth: 1,
              borderColor: "#d35322",
              borderRadius: 9999,
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
