import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";

import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import resourceStore from "../Helpers/MobX/ResourceStore";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

const WarehouseScreen = observer(() => {
  // MobX
  const { stone, iron, zCoins, diamonds } = resourceStore;

  // Refs
  const stoneRef = useRef(null);
  const ironRef = useRef(null);
  const zCoinsRef = useRef(null);
  const diamondsRef = useRef(null);

  const handleWarehouseChange = (resourceType, value) => {
    resourceStore.updateWarehouseQuantity(resourceType, parseInt(value, 10));
  };

  const navigation = useNavigation();

  const focusAndSelect = (ref) => {
    ref.current.focus();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <StatInput
          ref={stoneRef}
          label={"Stone in Warehouse"}
          value={stone.warehouse.toString()}
          onChangeValue={(text) => {
            if (text.length < 1) text = "0";
            handleWarehouseChange("stone", cleanUpNumber(text));
          }}
          selectTextOnFocus
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
          returnKeyType={"next"}
          onSubmitEditing={() => focusAndSelect(ironRef)}
        />

        <StatInput
          ref={ironRef}
          label={"Iron in Warehouse"}
          value={iron.warehouse.toString()}
          onChangeValue={(text) => {
            if (text.length < 1) text = "0";
            handleWarehouseChange("iron", cleanUpNumber(text));
          }}
          selectTextOnFocus
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
          returnKeyType={"next"}
          onSubmitEditing={() => focusAndSelect(zCoinsRef)}
        />

        <StatInput
          ref={zCoinsRef}
          label={"ZCoins in Warehouse"}
          value={zCoins.warehouse.toString()}
          onChangeValue={(text) => {
            if (text.length < 1) text = "0";
            handleWarehouseChange("zCoins", cleanUpNumber(text));
          }}
          selectTextOnFocus
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
          returnKeyType={"next"}
          onSubmitEditing={() => focusAndSelect(diamondsRef)}
        />

        <StatInput
          ref={diamondsRef}
          label={"Diamonds in Warehouse"}
          value={diamonds.warehouse.toString()}
          onChangeValue={(text) => {
            if (text.length < 1) text = "0";
            handleWarehouseChange("diamonds", cleanUpNumber(text));
          }}
          selectTextOnFocus
          // onFocus={() => {
          //   const inputRef = inputRefs[index];
          //   inputRef.setNativeProps({
          //     selection: {
          //       start: inputRef.current.value.length,
          //       end: inputRef.current.value.length,
          //     },
          //   });
          // }}
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
          returnKeyType={"go"}
          onSubmitEditing={() => navigation.navigate("Stone Chests")}
        />

        <View style={{ height: 50 }}></View>
      </View>
    </KeyboardAwareScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eee",
  },
});

export default WarehouseScreen;
