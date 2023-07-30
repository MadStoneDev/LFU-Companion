import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/ResourceStore";

const inputRefs = [];

const StoneScreen = observer(() => {
  const { stone } = resourceStore;

  const handleChestsChange = (resourceType, quantity, value) => {
    resourceStore.updateChestQuantity(
      resourceType,
      quantity,
      parseInt(value, 10)
    );
  };

  const handleInputRef = (index) => (ref) => (inputRefs[index] = ref);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {Object.entries(stone.chests)
          .reverse()
          .map(([quantity, amount]) => {
            return (
              <StatInput
                ref={handleInputRef(quantity)}
                key={quantity}
                label={quantity + " Stone Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = 0;
                  handleChestsChange("stone", quantity, cleanUpNumber(text));
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
                // onSubmitEditing={() => inputRefs[quantity].current.focus()}
              />
            );
          })}
      </View>
    </KeyboardAwareScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "#f7f7f7",
  },
});

export default StoneScreen;
