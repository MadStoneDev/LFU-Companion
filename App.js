import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import SplashScreen from "./src/Screens/SplashScreen";
import TrackerScreen from "./src/Screens/TrackerScreen";
import StatsScreen from "./src/Screens/StatsScreen";

import * as Sentry from "@sentry/react-native";
import BuildingScreen from "./src/Screens/BuildingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardingScreen from "./src/Screens/OnBoardingScreen";
import OptimisedStatusBar from "./src/Components/OptimisedStatusBar";
import HomeDrawer from "./src/Navigation/HomeDrawer";
import { Modal, Portal, Provider, TextInput } from "react-native-paper";
import { TouchableWithoutFeedback, View } from "react-native";
import resourceStore from "./src/Helpers/ResourceStore";
import { saveDataToFile } from "./src/Helpers/FileManager";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";

// Sentry.init({
//   dsn: "https://fabaa650eabd4833a0f4cd8eea438ccf@o4505502003625984.ingest.sentry.io/4505502019747840",
//   // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
//   // We recommend adjusting this value in production.
//   tracesSampleRate: 1.0,
// });

const Stack = createStackNavigator();

const App = observer(() => {
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

  // MobX
  const { username } = resourceStore;

  // States
  const [modalVisible, setModalVisible] = useState(false);
  const [usernameValue, setUsernameValue] = useState(username);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <SafeAreaProvider>
      <OptimisedStatusBar backgroundColor={"black"} barStyle="light-content" />
      {loading ? (
        <SplashScreen />
      ) : showOnBoarding ? (
        <OnBoardingScreen setOnBoarding={setShowOnBoarding} />
      ) : (
        <NavigationContainer>
          <Provider>
            <Portal>
              <Modal
                visible={modalVisible}
                onDismiss={hideModal}
                contentContainerStyle={{
                  backgroundColor: "white",
                  margin: 20,
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <TextInput
                    style={{
                      flex: 1,
                      height: 35,
                      padding: 0,
                      backgroundColor: "white",
                    }}
                    label={"Username"}
                    mode={"outlined"}
                    textColor={"black"}
                    activeOutlineColor={"#d35322"}
                    outlineColor={"#d35322"}
                    value={usernameValue}
                    onChangeText={(text) => setUsernameValue(text)}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => {
                      resourceStore.updateUsername(usernameValue);
                      saveDataToFile(resourceStore).then(() => {
                        console.log("Saved");
                      });
                      hideModal();
                    }}
                  >
                    <Ionicons name="checkbox-sharp" size={30} color="#d35322" />
                  </TouchableWithoutFeedback>
                </View>
              </Modal>
            </Portal>

            <Stack.Navigator>
              <Stack.Screen
                name={"Home"}
                options={{
                  headerShown: false,
                }}
              >
                {(props) => <HomeDrawer showModal={showModal} {...props} />}
              </Stack.Screen>
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
          </Provider>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
});

export default App;
