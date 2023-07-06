import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/Screens/SplashScreen";

export default function App() {
  // States
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    // setLoading(false);
  }, 1500);

  return (
    <SafeAreaProvider>
      {loading ? (
        <SplashScreen />
      ) : (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
