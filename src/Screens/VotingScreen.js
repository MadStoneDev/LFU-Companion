import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { observer } from "mobx-react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import featureSuggestionsStore from "../Helpers/MobX/featureSuggestionsStore";

const VotingScreen = observer(() => {
  // mobX
  const { suggestions, loadSuggestions, voteOnSuggestion } =
    featureSuggestionsStore;

  // States
  const [voted, setVoted] = useState(false);
  const [featureVote, setFeatureVote] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const canVoteToday = async () => {
    try {
      const lastVoteTimestamp = await AsyncStorage.getItem("lastVoteTimestamp");
      const lastVotedFor = await AsyncStorage.getItem("lastVotedFor");

      if (!lastVoteTimestamp) {
        await AsyncStorage.setItem("lastVotedFor", "");
        return true;
      }

      const today = new Date();
      const lastVoteDay = new Date(parseInt(lastVoteTimestamp, 10));

      if (
        today.getFullYear() === lastVoteDay.getFullYear() &&
        today.getMonth() === lastVoteDay.getMonth() &&
        today.getDate() === lastVoteDay.getDate()
      ) {
        setFeatureVote(lastVotedFor);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  // Only One Vote per Week
  const canVoteThisWeek = async () => {
    try {
      const lastVoteTimestamp = await AsyncStorage.getItem("lastVoteTimestamp");
      const lastVotedFor = await AsyncStorage.getItem("lastVotedFor");

      if (!lastVoteTimestamp) {
        await AsyncStorage.setItem("lastVotedFor", "");
        return true;
      }

      const today = new Date();
      const todayIs = today.getDay().toLocaleString();

      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - todayIs);
      startOfWeek.setHours(0, 0, 0, 0);
      const thisSunday = startOfWeek.toLocaleString();

      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate().toLocaleString() - todayIs + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      const thisSaturday = endOfWeek.toLocaleString();

      const lastVoteDay = new Date(parseInt(lastVoteTimestamp, 10)).getDay();

      if (lastVoteDay < thisSunday || lastVoteDay > thisSaturday) {
        await AsyncStorage.setItem("lastVotedFor", "");
      } else {
        setFeatureVote(lastVotedFor);
      }

      return lastVoteDay >= thisSunday && lastVoteDay <= thisSaturday;
    } catch (error) {
      return false;
    }
  };

  const submitVote = async () => {
    try {
      await AsyncStorage.setItem("lastVoteTimestamp", Date.now().toString());
      await AsyncStorage.setItem("lastVotedFor", featureVote);
      voteOnSuggestion(featureVote).then(() => console.log("Vote saved"));
      setVoted(true);

      console.log("Vote submitted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);

    loadSuggestions().then(() => console.log("Loaded suggestions"));

    canVoteToday()
      .then((res) => setVoted(!res))
      .catch((error) => console.log(error));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate("Dashboard");
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

      {!suggestions ? null : (
        <Text
          style={{
            margin: 20,
            padding: 20,
            backgroundColor: "#ddd",
            borderWidth: 1,
            borderColor: "#bbb",
            fontSize: 15,
            lineHeight: 20,
            textAlign: "center",
            color: "#555",
          }}
        >
          There are currently{" "}
          <Text style={{ fontWeight: "800" }}>{suggestions.length}</Text>{" "}
          features to vote from. Scroll through the list below and read the
          description to get a better idea what each feature is about:
        </Text>
      )}

      <ScrollView>
        {loading ? <ActivityIndicator size="large" color="#d35322" /> : null}
        {!suggestions && !loading
          ? null
          : suggestions.map((feature, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 20,
                    marginVertical: 10,
                    marginHorizontal: 20,
                    backgroundColor:
                      featureVote === feature.title ? "#d35322" : "#fff",
                    borderColor: "#d35322",
                    borderRadius: 15,

                    shadowColor: "black",
                    shadowOpacity: featureVote === feature.title ? 0 : 0.35,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowRadius: 5,
                    elevation: featureVote === feature.title ? 0 : 6,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      paddingVertical: 5,
                      paddingHorizontal: 5,
                      top: 21,
                      right: 20,
                      fontWeight: "600",
                      color: "#d35322",
                    }}
                  >
                    {feature.votes} Votes
                  </Text>

                  <Text
                    style={{
                      marginBottom: 15,
                      width: "80%",
                      fontSize: 20,
                      lineHeight: 28,
                      fontWeight: "600",
                      color: featureVote === feature.title ? "white" : "#555",
                    }}
                  >
                    {feature.title}
                  </Text>

                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 20,
                      color: featureVote === feature.title ? "white" : "#555",
                      opacity: 0.7,
                    }}
                  >
                    {feature.description}
                  </Text>

                  {voted ? null : (
                    <TouchableWithoutFeedback
                      onPress={() => setFeatureVote(feature.title)}
                    >
                      <Text
                        style={{
                          padding: 15,
                          marginTop: 40,

                          backgroundColor:
                            featureVote === feature.title
                              ? "rgba(255, 255, 255, 0.45)"
                              : "#d35322",
                          borderRadius: 999,
                          textAlign: "center",
                          fontSize: 16,
                          fontWeight: "600",
                          color:
                            featureVote === feature.title ? "#d35322" : "white",
                        }}
                      >
                        {featureVote === feature.title
                          ? "Currently Selected"
                          : "Vote"}
                      </Text>
                    </TouchableWithoutFeedback>
                  )}
                </View>
              );
            })}

        {voted ? null : (
          <TouchableWithoutFeedback onPress={() => setFeatureVote("")}>
            <Text
              style={{
                padding: 10,
                textAlign: "center",
                textDecorationLine: "underline",
              }}
            >
              Remove Selection
            </Text>
          </TouchableWithoutFeedback>
        )}
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
          Note: You can only vote once per day
        </Text>

        <TouchableWithoutFeedback
          onPress={voted ? null : () => submitVote(featureVote)}
        >
          <Text
            style={{
              padding: 13,
              marginHorizontal: 20,
              backgroundColor: voted
                ? "#555"
                : featureVote === ""
                ? "#777"
                : "#fff",
              borderWidth: voted ? 0 : 2,
              borderColor: featureVote === "" ? "#555" : "#d35322",
              borderRadius: 999,
              textAlign: "center",
              fontSize: 15,
              fontWeight: "800",
              color: voted ? "#333" : featureVote === "" ? "#555" : "#d35322",
            }}
          >
            {voted ? "Already voted today" : "Submit your vote"}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
});

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
