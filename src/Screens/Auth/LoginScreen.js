import { useSignIn } from "@clerk/clerk-expo";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (isLoaded) {
      try {
        const completeSignIn = await signIn.create({
          identifier: emailAddress,
          password,
        });

        await setActive({ session: completeSignIn.createdSessionId });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
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
          secureTextEntry={true}
          onChangeText={(password) => setPassword}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
