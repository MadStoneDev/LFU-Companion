import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/Screens/SplashScreen";

import * as Sentry from "@sentry/react-native";
import BuildingScreen from "./src/Screens/BuildingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardingScreen from "./src/Screens/OnBoardingScreen";
import OptimisedStatusBar from "./src/Components/OptimisedStatusBar";
import HomeDrawer from "./src/Navigation/HomeDrawer";
import { Modal, Portal, Provider, TextInput } from "react-native-paper";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import resourceStore from "./src/Helpers/MobX/ResourceStore";
import { saveDataToFile } from "./src/Helpers/FileManager";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import HomeStack from "./src/Navigation/HomeStack";

// Sentry.init({
//   dsn: "https://fabaa650eabd4833a0f4cd8eea438ccf@o4505502003625984.ingest.sentry.io/4505502019747840",
//   // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
//   // We recommend adjusting this value in production.
//   tracesSampleRate: 1.0,
// });

const Stack = createStackNavigator();

const App = observer(() => {
  // MobX
  const { username } = resourceStore;

  // States
  const [loading, setLoading] = useState(true);
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("");

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    // Check if user has loaded the app before
    AsyncStorage.getItem("firstLoad-1.1.0").then((value) => {
      if (!value) {
        // Flag doesn't exist, this is the first time the app has loaded
        setShowOnBoarding(true);
      }
    });
  }, []);

  useEffect(() => {
    // Save onboarding flag
    if (showOnBoarding) {
      AsyncStorage.setItem("firstLoad-1.1.0", "true").then((r) =>
        console.log("AsyncStorage Flag Set")
      );
    }
  }, [showOnBoarding]);

  const showModal = () => {
    setCurrentUsername(username);
    setModalVisible(true);
  };
  const hideModal = (updateUsername = false) => {
    if (!updateUsername) {
      resourceStore.updateUsername(currentUsername);
    }

    setModalVisible(false);
  };

  return (
    <ClerkProvider
      publishableKey={Constants.manifest.extra.clerkPublishableKey}
    >
      <SafeAreaProvider>
        <OptimisedStatusBar
          backgroundColor={"black"}
          barStyle="light-content"
        />
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
                      value={resourceStore.username}
                      onChangeText={(text) =>
                        resourceStore.updateUsername(text)
                      }
                    />
                    <TouchableWithoutFeedback
                      onPress={() => {
                        hideModal(true);

                        saveDataToFile(resourceStore).then(() => {
                          console.log("Username Saved");
                        });
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          backgroundColor: "#d35322",
                          borderRadius: 10,
                          gap: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                          }}
                        >
                          Save
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </Modal>
              </Portal>

              <HomeStack showModal={showModal} />
            </Provider>
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    </ClerkProvider>
  );
});

export default App;
