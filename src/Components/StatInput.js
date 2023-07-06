import { TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const StatInput = ({ label, value, onChangeValue, icon = null }) => {
  const onChangeHandler = (value) => {
    onChangeValue?.(value);
  };

  return (
    <View>
      <TextInput
        style={styles.statInput}
        contentStyle={{ top: 2, paddingLeft: 40 }}
        mode={"outlined"}
        label={label}
        value={value}
        placeholder={"eg. 3"}
        activeOutlineColor={"#47656d"}
        onChangeText={onChangeHandler}
        keyboardType="numeric"
      ></TextInput>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  statInput: {
    marginBottom: 10,
    height: 40,
  },
});

export default StatInput;
