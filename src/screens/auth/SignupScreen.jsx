import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const StyledView = styled(View);
const StyledText = styled(Text);

const SignupScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPssword, setConfirmPssword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password !== confirmPssword) {
      setError("Password does not match");
      return;
    }

    const bodyReq = { firstname, username, email, password };

    try {
      const response = await fetch("http://192.168.91.172:3002/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyReq),
      });

      const data = await response.json();
      console.log(data);
      alert("Signup successful");
      navigation.navigate("SignIn");
    } catch (error) {
      console.error(error);
      setError("An Error occurred, please try again");
    }
  };

  return (
    <SafeAreaView>
      <StyledView>
        <StyledView className="flex flex-col bg-[#0E0F35]">
          <StyledView className="py-20  flex items-center">
            <Image
              source={require("../../../assets/telegram.png")}
              className="w-20 h-20"
            />
          </StyledView>
          <StyledView className="bg-white rounded-tl-[100px]">
            <StyledText className="text-2xl font-semibold text-center py-10  ">
              Sign Up
            </StyledText>
            <ScrollView>
              <StyledView className="px-5 space-y-4">
                <TextInput
                  value={firstname}
                  onChangeText={setFirstname}
                  placeholder="Firstname"
                  autoCorrect
                  className="border border-slate-200  p-3 rounded-lg"
                />

                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Username"
                  autoCorrect
                  className="border border-slate-200  p-3 rounded-lg"
                />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  keyboardType="email-address"
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
                <TextInput
                  value={confirmPssword}
                  onChangeText={setConfirmPssword}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  autoCorrect
                  className="border border-slate-200  p-3 rounded-lg"
                />
              </StyledView>
            </ScrollView>
            <TouchableOpacity className="px-5 pt-10" onPress={handleSignUp}>
              <StyledText className="bg-[#0E0F35] text-white text-center p-3 rounded-md">
                Sign Up
              </StyledText>
            </TouchableOpacity>
            <StyledText className="text-center py-2">
              Already have an account?{" "}
              <StyledText
                onPress={() => navigation.navigate("SignIn")}
                className="cursor-pointer text-[#0E0F35]"
              >
                Sign In
              </StyledText>{" "}
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default SignupScreen;
