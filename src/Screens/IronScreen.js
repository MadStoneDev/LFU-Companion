import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { cleanUpNumber, processKeys } from "../Helpers/CleanUps";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import StatInput from "../Components/StatInput";
import resourceStore from "../Helpers/ResourceStore";
import { observer } from "mobx-react";

const IronScreen = observer(() => {
  const { iron } = resourceStore;

  const handleChestsChange = (resourceType, quantity, value) => {
    resourceStore.updateChestQuantity(
      resourceType,
      quantity,
      parseInt(value, 10)
    );
  };

  return (
    <ScrollView style={styles.container}>
      {Object.entries(iron.chests)
        .reverse()
        .map(([quantity, amount]) => {
          return (
            <StatInput
              key={quantity}
              label={quantity + " Iron Chest"}
              value={amount.toString()}
              onChangeValue={(text) => {
                if (text.length < 1) text = 0;
                handleChestsChange("iron", quantity, cleanUpNumber(text));
              }}
              icon={
                amount.toString().length < 1 ? null : (
                  <MaterialCommunityIcons
                    style={{ position: "absolute", left: 10, top: 16 }}
                    name="gold"
                    size={20}
                    color="black"
                  />
                )
              }
            />
          );
        })}

      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default IronScreen;
