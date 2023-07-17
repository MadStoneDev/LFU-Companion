import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { cleanUpNumber } from "../Helpers/CleanUps";
import { FontAwesome5 } from "@expo/vector-icons";
import StatInput from "../Components/StatInput";
import { observer } from "mobx-react";
import resourceStore from "../Helpers/ResourceStore";

const ZCoinsScreen = observer(() => {
  const { zCoins } = resourceStore;

  const handleChestsChange = (resourceType, quantity, value) => {
    resourceStore.updateChestQuantity(
      resourceType,
      quantity,
      parseInt(value, 10)
    );
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {Object.entries(zCoins.chests)
          .reverse()
          .map(([quantity, amount]) => {
            return (
              <StatInput
                key={quantity}
                label={quantity + " ZCoins Chest"}
                value={amount.toString()}
                onChangeValue={(text) => {
                  if (text.length < 1) text = 0;
                  handleChestsChange("zCoins", quantity, cleanUpNumber(text));
                }}
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
    borderWidth: 1,
    backgroundColor: "#f7f7f7",
  },
});

export default ZCoinsScreen;
