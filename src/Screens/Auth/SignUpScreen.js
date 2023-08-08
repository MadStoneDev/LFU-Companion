import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import cardTitle from "react-native-paper/src/components/Card/CardTitle";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUpScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const onSignUpPress = async () => {
    if (isLoaded) {
      try {
        await signUp.create({
          email: emailAddress,
          password: password,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setPendingVerification(true);
      } catch (err) {
        console.error(JSON.stringify(err, null, 2));
      }
    }
  };

  const onPressVerify = async () => {
    if (isLoaded) {
      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });

        await setActive({ session: completeSignUp.createdSessionId });
      } catch (err) {
        console.error(JSON.stringify(err, null, 2));
      }
    }
  };

  return (
    <View>
      {!pendingVerification && (
        <View>
          <View>
            <TextInput
              autoCapitalize={"none"}
              value={emailAddress}
              placeholder={"Email..."}
              onChangeText={(email) => setEmailAddress(email)}
            />
          </View>

          <View>
            <TextInput
              value={password}
              placeholder={"Password..."}
              placeholderTextColor={"#000"}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity onPress={onSignUpPress}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}

      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder={"Code..."}
              onChangeText={(code) => setCode(code)}
            />
          </View>

          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SignUpScreen;
