import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const OnBoardingScreen = ({ setOnBoarding = null, navigation = null }) => {
  // States
  const [currentActive, setCurrentActive] = useState(0);

  const onBoardingPages = [
    {
      image: null,
      title: "Welcome to",
      extraLange: "LFU Companion",
      subtitle: "Let's take a quick tour",
    },
    {
      image: require("../../assets/images/onBoarding003.png"),
      title: "Manage all of your resources",
      subtitle: "in the one place",
      content: (
        <View style={{ alignItems: "center" }}>
          <Text>Tap the</Text>
          <View
            style={{
              margin: 2,
              alignItems: "center",
              justifyContent: "center",
              elevation: 3,
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 24,
                height: 24,
                backgroundColor: "black",
                elevation: 0,
                zIndex: 0,
              }}
            />
            <FontAwesome name="pencil-square" size={34} color="white" />
          </View>
          <Text>to update your resources</Text>
        </View>
      ),
    },
    {
      image: require("../../assets/images/onBoarding004.png"),
      title: "Track multiple buildings",
      subtitle: "at the same time",
      content: (
        <View style={{ alignItems: "center" }}>
          <Text>Tap the</Text>
          <View
            style={{
              margin: 2,
              alignItems: "center",
              justifyContent: "center",

              borderRadius: 999,
              elevation: 3,
            }}
          >
            <View
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                backgroundColor: "white",
                borderRadius: 999,
                elevation: 0,
                zIndex: 0,
              }}
            />
            <FontAwesome
              style={{}}
              name="plus-circle"
              size={34}
              color="#d35322"
            />
          </View>
          <Text>to track more buildings</Text>
        </View>
      ),
    },
    {
      image: require("../../assets/images/onBoarding005.png"),
      title: "Re-arrange tracked buildings",
      subtitle: "to change priorities",
      content: (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
            }}
          >
            <Text>Tap</Text>
            <Image
              source={require("../../assets/images/03_Tap.png")}
              style={{ height: 34, resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
            }}
          >
            <Text>Hold</Text>
            <Image
              source={require("../../assets/images/03_Hold.png")}
              style={{ height: 34, resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
            }}
          >
            <Text>Move</Text>
            <Image
              source={require("../../assets/images/03_Move.png")}
              style={{ height: 34, resizeMode: "contain" }}
            />
          </View>
        </View>
      ),
    },
  ];

  return (
    <>
      {currentActive === 0 ? (
        <View
          style={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#d35322",
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              {onBoardingPages[currentActive].title}
            </Text>
            <Text
              style={{
                marginBottom: 40,
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              {onBoardingPages[currentActive].extraLange}
            </Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              {onBoardingPages[currentActive].subtitle}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20, width: "100%" }}>
            <Text
              style={{
                marginBottom: 10,
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.5)",
                textTransform: "uppercase",
              }}
            >
              Tutorial {currentActive + 1} / {onBoardingPages.length}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => setCurrentActive(currentActive + 1)}
            >
              <Text
                style={{
                  padding: 15,
                  marginBottom: 15,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  width: "100%",
                  color: "#d35322",
                  textAlign: "center",
                }}
              >
                Next
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Image
            style={{
              marginVertical: 10,
              maxWidth: "100%",
              height: "45%",
              resizeMode: "contain",
            }}
            source={onBoardingPages[currentActive].image}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {onBoardingPages[currentActive].title}
            </Text>
            <Text>{onBoardingPages[currentActive].subtitle}</Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            {onBoardingPages[currentActive].content}
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              width: "100%",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", gap: 5, marginBottom: 10 }}>
              {onBoardingPages.map((page, index) => (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderColor: index === currentActive ? "#d35322" : "#ddd",
                    backgroundColor:
                      index === currentActive ? "#d35322" : "white",
                    width: 10,
                    height: 10,
                    borderRadius: 20,
                  }}
                />
              ))}
            </View>

            {currentActive === onBoardingPages.length - 1 ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  setOnBoarding
                    ? setOnBoarding(false)
                    : navigation.navigate("Home");
                }}
              >
                <Text
                  style={{
                    padding: 15,
                    marginBottom: 15,
                    backgroundColor: "#d35322",
                    borderRadius: 10,
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Start
                </Text>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => setCurrentActive(currentActive + 1)}
              >
                <Text
                  style={{
                    padding: 15,
                    marginBottom: 15,
                    backgroundColor: "#d35322",
                    borderRadius: 10,
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Next
                </Text>
              </TouchableWithoutFeedback>
            )}

            {currentActive > 0 ? (
              <TouchableWithoutFeedback
                onPress={() => setCurrentActive(currentActive - 1)}
              >
                <Text style={{ marginBottom: 20, fontSize: 12, color: "#777" }}>
                  Missed something? Go back.
                </Text>
              </TouchableWithoutFeedback>
            ) : null}
          </View>
        </View>
      )}
    </>
  );
};

export default OnBoardingScreen;
