import { db } from "./firestoreConfig";
import {
  collection,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const getSuggestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "featureSuggestions"));

    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching suggestions: ", error);
    throw error;
  }
};

const voteOnSuggestion = async (title) => {
  try {
    const suggestionsRef = await collection(db, "featureSuggestions");

    const q = query(suggestionsRef, where("title", "==", title));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn("Suggestion not found");
      return null;
    }

    const doc = querySnapshot.docs[0];

    const newVotes = (parseInt(doc.data().votes) || 0) + 1;

    await updateDoc(doc.ref, {
      votes: newVotes,
    });

    return newVotes;
  } catch (error) {
    console.error("Error voting on suggestion: ", error);
    throw error;
  }
};

export { getSuggestions, voteOnSuggestion };
