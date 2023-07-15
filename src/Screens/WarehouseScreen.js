import { ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";

import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import resourceStore from "../Helpers/ResourceStore";

const WarehouseScreen = observer(() => {
  // MobX
  const { stone, iron, zCoins, diamonds } = resourceStore;

  const handleWarehouseChange = (resourceType, value) => {
    resourceStore.updateWarehouseQuantity(resourceType, parseInt(value, 10));
  };

  return (
    <ScrollView style={styles.container}>
      <StatInput
        label={"Stone in Warehouse"}
        value={stone.warehouse.toString()}
        onChangeValue={(text) => {
          if (text.length < 1) return;
          handleWarehouseChange("stone", cleanUpNumber(text));
        }}
        icon={
          stone.warehouse.toString().length < 1 ? null : (
            <FontAwesome5
              style={{ position: "absolute", left: 10, top: 20 }}
              name="warehouse"
              size={13}
              color="black"
            />
          )
        }
      />

      <StatInput
        label={"Iron in Warehouse"}
        value={iron.warehouse.toString()}
        onChangeValue={(text) => {
          if (text.length < 1) return;
          handleWarehouseChange("iron", cleanUpNumber(text));
        }}
        icon={
          iron.warehouse.toString().length < 1 ? null : (
            <FontAwesome5
              style={{ position: "absolute", left: 10, top: 20 }}
              name="warehouse"
              size={13}
              color="black"
            />
          )
        }
      />

      <StatInput
        label={"ZCoins in Warehouse"}
        value={zCoins.warehouse.toString()}
        onChangeValue={(text) => {
          if (text.length < 1) return;
          handleWarehouseChange("zCoins", cleanUpNumber(text));
        }}
        icon={
          zCoins.warehouse.toString().length < 1 ? null : (
            <FontAwesome5
              style={{ position: "absolute", left: 10, top: 20 }}
              name="warehouse"
              size={13}
              color="black"
            />
          )
        }
      />

      <StatInput
        label={"Diamonds in Warehouse"}
        value={diamonds.warehouse.toString()}
        onChangeValue={(text) => {
          if (text.length < 1) return;
          handleWarehouseChange("diamonds", cleanUpNumber(text));
        }}
        icon={
          diamonds.warehouse.toString().length < 1 ? null : (
            <FontAwesome5
              style={{ position: "absolute", left: 10, top: 20 }}
              name="warehouse"
              size={13}
              color="black"
            />
          )
        }
      />

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

export default WarehouseScreen;
