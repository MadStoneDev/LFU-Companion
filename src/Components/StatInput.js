import { ActivityIndicator, TextInput } from "react-native-paper";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { forwardRef, useEffect, useRef, useState } from "react";
import { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/ResourceStore";
import { AntDesign } from "@expo/vector-icons";

const StatInput = forwardRef(
  ({ label, value, onChangeValue, onFocus, icon = null, ...rest }, ref) => {
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
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TouchableWithoutFeedback style={{ flexGrow: 0 }}>
          <AntDesign name="minussquareo" size={24} color="#555" />
        </TouchableWithoutFeedback>

        <View>
          <TextInput
            ref={ref}
            style={styles.statInput}
            contentStyle={{ top: 2, paddingLeft: 40 }}
            mode={"outlined"}
            label={label}
            value={value?.toString()}
            // placeholder={"eg. 3"}
            activeOutlineColor={"#47656d"}
            onChangeText={(text) => {
              onChangeHandler(text);
            }}
            keyboardType="numeric"
            {...rest}
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

        <TouchableWithoutFeedback style={{ flexGrow: 0 }}>
          <AntDesign name="plussquareo" size={24} color="#555" />
        </TouchableWithoutFeedback>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  statInput: {
    flexGrow: 1,
    height: 40,
    minWidth: "70%",
  },
});

export default StatInput;
