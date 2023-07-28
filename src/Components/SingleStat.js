import { Text, View, StyleSheet } from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";

const SingleStat = ({
  description,
  data,
  colour = "white",
  customStyles = null,
}) => {
  const [optimisedData, setOptimisedData] = useState("");

  let iconComponent;

  switch (description) {
    case "Stone":
      iconComponent = <Entypo name="basecamp" size={18} color={colour} />;
      break;

    case "Iron":
      iconComponent = (
        <MaterialCommunityIcons
          name="gold"
          size={24}
          color={colour}
          style={{ left: 4 }}
        />
      );
      break;

    case "Z Coins":
      iconComponent = <FontAwesome5 name="coins" size={18} color={colour} />;
      break;

    case "Diamonds":
      iconComponent = (
        <FontAwesome
          name="diamond"
          size={18}
          color={colour}
          style={{ left: 1 }}
        />
      );
      break;
  }

  useEffect(() => {
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    setOptimisedData(data.toString().replace(thousands, ","));
  }, [data]);

  return (
    <View style={[styles.statSingle, customStyles]}>
      {iconComponent}
      {/*<GiStoneBlock size={20} color={"white"} />*/}
      <Text style={[styles.statQuantity, { color: colour }]}>
        {optimisedData}
      </Text>
      <Text style={[styles.statDescription, { color: colour }]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statSingle: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statQuantity: {
    marginLeft: 10,
    marginRight: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
  statDescription: {
    fontSize: 15,
    fontWeight: "light",
  },
});

export default SingleStat;
