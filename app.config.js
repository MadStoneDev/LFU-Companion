import "dotenv/config";

export default {
  expo: {
    name: "LFU Companion",
    slug: "LFToolbox",
    owner: "madstone.dev",
    version: "1.1.2",
    orientation: "portrait",
    icon: "./assets/icon_new.png",
    userInterfaceStyle: "light",
    splash: {
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.omdesti.lftoolbox",
      buildNumber: "16",
      usesAppleSignIn: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon_foreground.png",
        backgroundImage: "./assets/icon_background.png",
      },
      package: "com.omdesti.lftoolbox",
      versionCode: 16,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "9d10aa85-c883-4b34-a4ae-58084e8650ec",
      },
      firebaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId:
        process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,

      faunaGuest: process.env.EXPO_PUBLIC_FAUNA_GUEST,
      faunaFreeUser: process.env.EXPO_PUBLIC_FAUNA_FREE_USER,
      faunaSubscribedUser: process.env.EXPO_PUBLIC_FAUNA_SUBSCRIBED_USER,

      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
};
