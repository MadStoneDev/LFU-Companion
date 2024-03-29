import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { FontAwesome5 } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/MobX/ResourceStore";
import { useNavigation } from "@react-navigation/native";

const inputRefs = [];

const ZCoinsScreen = observer(() => {
  const { zCoins } = resourceStore;

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
        {Object.entries(zCoins.chests)
          .reverse()
          .map(([quantity, amount], index) => {
            return (
              <StatInput
                ref={handleInputRef(index)}
                key={quantity}
                label={quantity + " ZCoins Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = 0;
                  handleChestsChange("zCoins", quantity, cleanUpNumber(text));
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
                  amount.toString().length < 1 ? null : (
                    <FontAwesome5
                      style={{ position: "absolute", left: 10, top: 20 }}
                      name="coins"
                      size={15}
                      color="black"
                    />
                  )
                }
                returnKeyType={index < inputRefs.length - 1 ? "next" : "done"}
                onSubmitEditing={() => {
                  index < inputRefs.length - 1
                    ? focusAndSelect(inputRefs[index + 1])
                    : navigation.navigate("Diamond Chests");
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
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    minHeight: "100%",
  },
});

export default ZCoinsScreen;
