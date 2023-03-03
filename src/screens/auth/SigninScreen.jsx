import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const StyledView = styled(View);
const StyledText = styled(Text);

const SigninScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async () => {
    if (!username || !password) {
      setError(alert("Please enter both username and password."));
      return;
    }

    try {
      const response = await fetch("http://192.168.91.172:3002/api/v1/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 401) {
        setError(alert("Invalid username or password."));
        return;
      }

      const data = await response.json();
      console.log(data);
      // Save the token to storage or context
    } catch (error) {
      console.error(error);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <StyledView>
      <StyledView className="flex flex-col bg-[#0E0F35]">
        <StyledView className="py-20  flex items-center">
          <Image
            source={require("../../../assets/telegram.png")}
            className="w-20 h-20"
          />
        </StyledView>
        <StyledView className="bg-white w-full h-full rounded-tl-[100px]">
          <StyledText className="text-2xl font-semibold text-center py-10  ">
            Sign In
          </StyledText>
          <ScrollView scrollEnabled>
            <StyledView className="px-5 space-y-4">
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                autoCorrect
                className="border border-slate-200  p-3 rounded-lg"
              />

              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect
                className="border  border-slate-200  p-3 rounded-lg"
              />
            </StyledView>
            <TouchableOpacity className="px-5 pt-5" onPress={handleSignIn}>
              <StyledText className="bg-[#0E0F35] text-white text-center p-3 rounded-md">
                Sign In
              </StyledText>
            </TouchableOpacity>
            <StyledText
              onPress={() => navigation.navigate("ForgotPassword")}
              className="cursor-pointer text-slate-500 text-center pt-5"
            >
              Forgot password?
            </StyledText>
            <StyledText className="text-center pt-48 text-slate-500">
              Don't have an account yet?{" "}
              <StyledText
                onPress={() => navigation.navigate("SignUp")}
                className="text-[#0E0F35]"
              >
                Sign Up
              </StyledText>
            </StyledText>
          </ScrollView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default SigninScreen;
