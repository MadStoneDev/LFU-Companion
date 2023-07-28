import { StatusBar, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const OptimisedStatusBar = ({ backgroundColor, ...props }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor, height: insets.top }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export default OptimisedStatusBar;
