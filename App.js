import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/Screens/SplashScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import StatsScreen from "./src/Screens/StatsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // States
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <SafeAreaProvider>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Home"}
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"Statistics"}
              component={StatsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
