import { observable, action } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSuggestions, voteOnSuggestion } from "../Firebase/firestoreDriver";

class FeatureSuggestionsStore {
  @observable suggestions = [];

  @action loadSuggestions = async () => {
    if (this.suggestions.length > 0) {
      console.log("Suggestions loaded from Store");
      return this.suggestions;
    }

    try {
      const timestamp = await AsyncStorage.getItem("fetchSuggestionsTimestamp");
      const savedSuggestions = await AsyncStorage.getItem("featureSuggestions");

      if (
        timestamp &&
        isToday(new Date(JSON.parse(timestamp))) &&
        savedSuggestions.length > 0
      ) {
        console.log("Suggestions loaded from AsyncStorage");
        this.suggestions = JSON.parse(savedSuggestions);
        return this.suggestions;
      }

      this.suggestions = await getSuggestions();

      await AsyncStorage.setItem(
        "featureSuggestions",
        JSON.stringify(this.suggestions)
      );
      await AsyncStorage.setItem(
        "fetchSuggestionsTimestamp",
        JSON.stringify(new Date())
      );

      console.log("Suggestions loaded from Firestore");
      return this.suggestions;
    } catch (error) {
      console.error("Error loading suggestions", error);
      return null;
    }
  };

  @action voteOnSuggestion = async (title) => {
    const votes = await voteOnSuggestion(title);
    const suggestionToUpdate = this.suggestions.find(
      (suggestion) => suggestion.title === title
    );
    if (suggestionToUpdate) suggestionToUpdate.votes = votes;
    await AsyncStorage.setItem(
      "featureSuggestions",
      JSON.stringify(this.suggestions)
    );
  };
}

const isToday = (date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const featureSuggestionsStore = new FeatureSuggestionsStore();
export default featureSuggestionsStore;
