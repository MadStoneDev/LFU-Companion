import { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardingScreen from "./src/Screens/OnBoardingScreen";

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
  const [showOnBoarding, setShowOnBoarding] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    // Check if user has loaded the app before
    AsyncStorage.getItem("firstLoad").then((value) => {
      if (!value) {
        // Flag doesn't exist, this is the first time the app has loaded
        setShowOnBoarding(true);
      }
    });
  }, []);

  useEffect(() => {
    // Save onboarding flag
    if (showOnBoarding) {
      AsyncStorage.setItem("firstLoad", "true").then((r) =>
        console.log("AsyncStorage Flag Set")
      );
    }
  }, [showOnBoarding]);

  return (
    <SafeAreaProvider>
      {loading ? (
        <SplashScreen />
      ) : showOnBoarding ? (
        <OnBoardingScreen setOnBoarding={setShowOnBoarding} />
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
            <Stack.Screen
              name={"OnBoarding"}
              component={OnBoardingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
