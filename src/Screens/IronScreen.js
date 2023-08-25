import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";
import resourceStore from "../Helpers/MobX/ResourceStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const inputRefs = [];

const IronScreen = observer(() => {
  const { iron } = resourceStore;

  const handleChestsChange = (resourceType, quantity, value) => {
    resourceStore.updateChestQuantity(
      resourceType,
      quantity,
      parseInt(value, 10)
    );
  };

  const navigation = useNavigation();

  const handleInputRef = (index) => (ref) => (inputRefs[index] = ref);

  const focusAndSelect = (ref) => {
    ref.focus();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {Object.entries(iron.chests)
          .reverse()
          .map(([quantity, amount], index) => {
            return (
              <StatInput
                ref={handleInputRef(index)}
                key={quantity}
                label={quantity + " Iron Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = "0";
                  handleChestsChange("iron", quantity, cleanUpNumber(text));
                }}
                selectTextOnFocus
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
                returnKeyType={index < inputRefs.length - 1 ? "next" : "done"}
                onSubmitEditing={() => {
                  index < inputRefs.length - 1
                    ? focusAndSelect(inputRefs[index + 1])
                    : navigation.navigate("zCoin Chests");
                }}
              />
            );
          })}
      </View>
    </KeyboardAwareScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});

export default IronScreen;
