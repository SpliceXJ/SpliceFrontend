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

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

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
            Reset Password
          </StyledText>
          <ScrollView scrollEnabled>
            <StyledView className="px-5 space-y-4">
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCorrect
                className="border border-slate-200  p-3 rounded-lg"
              />
            </StyledView>
            <TouchableOpacity className="px-5 pt-5">
              <StyledText className="bg-[#0E0F35] text-white text-center p-3 rounded-md">
                Send
              </StyledText>
            </TouchableOpacity>
            <StyledText
              onPress={() => navigation.navigate("SignIn")}
              className="cursor-pointer text-slate-500 text-center pt-5"
            >
              Sign in instead
            </StyledText>
            <StyledText className="text-center pt-64 text-slate-500">
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

export default ForgotPasswordScreen;
