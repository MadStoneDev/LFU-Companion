import { FontAwesome } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import { View } from "react-native";
import { useState } from "react";

const PaintChip = ({ paint }) => {
  const [selected, setSelected] = useState(false);

  return (
    <View>
      <Chip
        icon={() => (
          <FontAwesome
            name="paint-brush"
            size={18}
            color={selected ? "white" : paint}
          />
        )}
        mode={"outlined"}
        selectedColor={paint}
        style={{ backgroundColor: selected ? paint : "white" }}
        showSelectedOverlay={true}
        onPress={() => setSelected(!selected)}
      ></Chip>
    </View>
  );
};

export default PaintChip;
