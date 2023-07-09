import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import StatInput from "../Components/StatInput";
import { capitalise, cleanUpNumber, processKeys } from "../Helpers/CleanUps";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/ResourceStore";

const StoneScreen = observer(() => {
  const { stone } = resourceStore;

  const handleChestsChange = (resourceType, quantity, value) => {
    resourceStore.updateChestQuantity(
      resourceType,
      quantity,
      parseInt(value, 10)
    );
  };

  return (
    <ScrollView style={styles.container}>
      {Object.entries(stone.chests).map((quantity, amount) => {
        return (
          <StatInput
            key={quantity}
            label={quantity + " Stone Chest"}
            value={amount.toString()}
            onChangeValue={(text) => {
              handleChestsChange("stone, quantity", cleanUpNumber(text));
            }}
            icon={
              amount.toString().length < 1 ? null : (
                <Entypo
                  style={{ position: "absolute", left: 10, top: 20 }}
                  name="basecamp"
                  size={15}
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

export default StoneScreen;
