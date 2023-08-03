import { makeObservable, observable, action } from "mobx";
import faunadb from "faunadb";
import Constants from "expo-constants";

const q = faunadb.query;

class FaunaStore {
  features = null;

  constructor() {
    makeObservable(this, {
      features: observable,
      loadFeatures: action,
      saveVote: action,
      loadVotes: action,
      setFeatures: action,
    });
  }

  loadFeatures = async () => {
    const faunaAccess = Constants.manifest.extra.FAUNA_API_KEY;

    this.features = null;
    const response = [];

    try {
      const client = new faunadb.Client({
        secret: faunaAccess,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const results = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("featureSuggestions"))),
          q.Lambda((x) => q.Get(x))
        )
      );

      results.data.map((feature) => response.push(feature));
    } catch (error) {
      console.error(error);
    }

    this.setFeatures(response);
  };

  saveVote = async (vote) => {
    const faunaAccess = Constants.manifest.extra.FAUNA_API_KEY;

    try {
      const client = new faunadb.Client({
        secret: faunaAccess,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const document = await client.query(
        q.Paginate(q.Match(q.Index("feature_by_title"), vote))
      );

      const documentId = document.data[0].id;

      const getVotes = await client.query(
        q.Paginate(q.Match(q.Index("votes_by_title"), vote))
      );

      const currentVotes = getVotes.data[0] || 0;

      const newVotes = currentVotes + 1;

      await client.query(
        q.Update(q.Ref(q.Collection("featureSuggestions"), documentId), {
          data: { votes: newVotes },
        })
      );

      // CONSIDER THIS
      // Let(
      //     {
      //       docID: Match(Index('feature_by_title'), 'Gathering Timer')
      //     },
      //     Update(Select(['ref'], Get(Var('docID'))), {
      //       data: {
      //         votes: Add(Select(['data', 'votes'],Get(Var('docID'))), 1),
      //       }
      //     })
      // )
    } catch (error) {
      console.error(error);
    }
  };

  loadVotes = async () => {
    const faunaAccess = Constants.manifest.extra.FAUNA_API_KEY;

    try {
      const client = new faunadb.Client({
        secret: faunaAccess,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const document = await client.query(
        q.Paginate(q.Match(q.Index("feature_by_title"), "Gathering Timer"))
      );

      const documentId = document.data[0].id;

      const getVotes = await client.query(
        q.Paginate(q.Match(q.Index("votes_by_title"), "Gathering Timer"))
      );

      const currentVotes = getVotes.data[0] || 0;

      const newVotes = currentVotes + 1;

      // CONSIDER THIS (Load only those that are active
      // Filter(Map(Paginate(Documents(Collection('featureSuggestions'))), Lambda((ref) => Get(ref))),
      // Lambda('feature', Equals(Select(['data', 'status'], Var('feature')), 'active')))

      console.log(
        `Document Id: ${documentId}, Current votes: ${currentVotes}, new votes: ${newVotes}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  setFeatures = (features) => {
    this.features = features;
  };
}

const faunaStore = new FaunaStore();
export default faunaStore;
