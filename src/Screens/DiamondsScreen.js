import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from "@expo/vector-icons";
import { observer } from "mobx-react";

import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import resourceStore from "../Helpers/ResourceStore";
import { useNavigation } from "@react-navigation/native";

const inputRefs = [];

const DiamondsScreen = observer(() => {
  const { diamonds } = resourceStore;

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
        {Object.entries(diamonds.chests)
          .reverse()
          .map(([quantity, amount], index) => {
            return (
              <StatInput
                ref={handleInputRef(index)}
                key={quantity}
                label={quantity + " Diamond Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = 0;
                  handleChestsChange("diamonds", quantity, cleanUpNumber(text));
                }}
                icon={
                  amount.toString().length < 1 ? null : (
                    <FontAwesome
                      style={{ position: "absolute", left: 10, top: 19 }}
                      name="diamond"
                      size={15}
                      color="black"
                    />
                  )
                }
                returnKeyType={index < inputRefs.length - 1 ? "next" : "done"}
                onSubmitEditing={() => {
                  index < inputRefs.length - 1
                    ? inputRefs[index + 1].focus()
                    : null;
                }}
              />
            );
          })}

        <View style={{ height: 50 }}></View>
      </View>
    </KeyboardAwareScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "#eee",
  },
});

export default DiamondsScreen;
