import HomeDrawer from "./HomeDrawer";
import BuildingScreen from "../Screens/BuildingScreen";
import OnBoardingScreen from "../Screens/OnBoardingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../Screens/Auth/SignUpScreen";

const Stack = createStackNavigator();

const HomeStack = ({ showModal }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Home"}>
        {(props) => <HomeDrawer showModal={showModal} {...props} />}
      </Stack.Screen>
      <Stack.Screen name={"Building"} component={BuildingScreen} />
      <Stack.Screen name={"OnBoarding"} component={OnBoardingScreen} />
      <Stack.Screen name={"Sign Up"} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
