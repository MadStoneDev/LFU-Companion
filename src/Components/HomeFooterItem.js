import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeFooterItem = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 60,
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            paddingTop: 5,
            color: "#d35322",
            fontStyle: "italic",
            borderTopWidth: 1,
            borderColor: "#bbb",
          }}
        >
          <AntDesign name="Trophy" size={19} color="black" /> Upgrade to track
          more buildings
        </Text>
      </View>
    </View>
  );
};

export default HomeFooterItem;
