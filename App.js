import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import SplashScreen from "./src/Screens/SplashScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import StatsScreen from "./src/Screens/StatsScreen";

import * as Sentry from "@sentry/react-native";
import BuildingScreen from "./src/Screens/BuildingScreen";

Sentry.init({
  dsn: "https://fabaa650eabd4833a0f4cd8eea438ccf@o4505502003625984.ingest.sentry.io/4505502019747840",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const Stack = createStackNavigator();

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
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <Stack.Screen
              name={"Building"}
              component={BuildingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
