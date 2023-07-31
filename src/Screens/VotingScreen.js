import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useEffect } from "react";

const VotingScreen = ({ navigation }) => {
  const faunaAccess = Constants.manifest.extra.FAUNA_API_KEY;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="#d35322" />
        </Pressable>

        <Text style={styles.headerTitle}>Vote for the Next Feature</Text>
      </View>

      {/*<Text style={{ paddingHorizontal: 20, textAlign: "center" }}>*/}
      {/*  Please note that voting for a feature is completely anonymous. LFU*/}
      {/*  Companion does not record your username, or any personal details. It*/}
      {/*  simply increments a tally.*/}
      {/*</Text>*/}

      <ScrollView style={{ padding: 20 }}>
        <View
          style={{ padding: 20, backgroundColor: "#d35322", borderRadius: 15 }}
        >
          <Text
            style={{
              marginBottom: 10,
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            Event Calendar
          </Text>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              color: "white",
              opacity: 0.7,
            }}
          >
            A calendar tool that lists all of the events available on each day
            in Last Fortress. This will include Alliance Duel, All Out War and
            Personal Armaments Race schedules.
          </Text>
          <Text
            style={{
              padding: 15,
              marginTop: 20,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: 999,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "white",
            }}
          >
            Vote
          </Text>
        </View>
      </ScrollView>

      <View style={{ margin: 20 }}>
        <Text
          style={{
            marginBottom: 5,
            textAlign: "center",
            fontStyle: "italic",
            opacity: 0.5,
          }}
        >
          Note: You can only vote once per week
        </Text>
        <Text
          style={{
            padding: 20,
            backgroundColor: "#d35322",
            borderRadius: 999,
            textAlign: "center",
            color: "white",
          }}
        >
          Submit your vote
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee" },
  header: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "800",
    color: "#d35322",
  },
});

export default VotingScreen;
