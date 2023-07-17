import { ActivityIndicator, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";

const StatInput = ({ label, value, onChangeValue, onFocus, icon = null }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [timer, setTimer] = useState(null);

  const onChangeHandler = (value) => {
    onChangeValue?.(value);

    // Reset Timer
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      startSaving(value);
    }, 1000);

    setTimer(newTimer);
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  const startSaving = (value) => {
    setIsSaving(true);

    saveDataToFile(resourceStore).then(() => {
      console.log("Data saved");
    });

    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <View>
      <TextInput
        style={styles.statInput}
        contentStyle={{ top: 2, paddingLeft: 40 }}
        mode={"outlined"}
        label={label}
        value={value?.toString()}
        placeholder={"eg. 3"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => {
          onChangeHandler(text);
        }}
        onFocus={onFocus}
        keyboardType="numeric"
      ></TextInput>
      {icon}

      {isSaving ? (
        <ActivityIndicator
          size={"small"}
          color={"#d53233"}
          style={{ position: "absolute", right: 10, top: 15 }}
        />
      ) : null}
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
