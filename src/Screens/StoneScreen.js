import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatInput from "../Components/StatInput";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/ResourceStore";
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation();

  const handleInputRef = (index) => (ref) => (inputRefs[index] = ref);

  const focusAndSelect = (ref) => {
    ref.focus();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {Object.entries(stone.chests)
          .reverse()
          .map(([quantity, amount], index) => {
            return (
              <StatInput
                ref={handleInputRef(index)}
                key={quantity}
                label={quantity + " Stone Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = 0;
                  handleChestsChange("stone", quantity, cleanUpNumber(text));
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
                    <Entypo
                      style={{ position: "absolute", left: 10, top: 20 }}
                      name="basecamp"
                      size={15}
                      color="black"
                    />
                  )
                }
                returnKeyType={index < inputRefs.length - 1 ? "next" : "done"}
                onSubmitEditing={() => {
                  index < inputRefs.length - 1
                    ? focusAndSelect(inputRefs[index + 1])
                    : navigation.navigate("Iron Chests");
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
    backgroundColor: "#eee",
  },
});

export default StoneScreen;
