import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image } from "react-native";

const SplashScreen = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        style={{
          marginBottom: 30,
          height: 50,
          maxWidth: "65%",
          resizeMode: "contain",
        }}
        source={require("../../assets/images/logo.png")}
      />
      <ActivityIndicator size="large" color="#02C3B1" />
    </SafeAreaView>
  );
};

export default SplashScreen;
