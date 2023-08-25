import { ActivityIndicator, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { forwardRef, useEffect, useState } from "react";
import { saveDataToFile } from "../Helpers/FileManager";
import resourceStore from "../Helpers/MobX/ResourceStore";
import { FontAwesome } from "@expo/vector-icons";

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
        <View style={{ minWidth: "60%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{icon}</Text>
            <Text
              style={{ marginLeft: 10, fontWeight: "bold", color: "black" }}
            >
              {label}
            </Text>
          </View>
          <TextInput
            ref={ref}
            style={{
              ...styles.statInput,
              backgroundColor: "transparent",
            }}
            // mode={"outlined"}
            value={value?.toString()}
            // placeholder={"eg. 3"}
            textColor={"black"}
            activeOutlineColor={"#d35322"}
            onChangeText={(text) => {
              onChangeHandler(text);
            }}
            selectionColor={"#F1AA78"}
            activeUnderlineColor={"#d35322"}
            keyboardType="number-pad"
            theme={{ colors: { text: "black" } }}
            {...rest}
          />

          {isSaving ? (
            <ActivityIndicator
              size={"small"}
              color={"#d53233"}
              style={{ position: "absolute", right: 10, bottom: 10 }}
            />
          ) : null}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  statInput: {
    flexGrow: 1,
    height: 40,
    width: "100%",
    color: "black",
  },
});

export default StatInput;
