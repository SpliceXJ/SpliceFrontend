import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React from "react";
import { withExpoSnack } from "nativewind";
import { useNavigation } from "@react-navigation/native";

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <StyledView className="bg-[#0E0F35] w-full h-full">
      <StyledView className="px-5 pt-40">
        <StyledView className="flex items-center justify-center">
          <Image
            source={require("../../../assets/telegram.png")}
            className="w-20 h-20"
          />
        </StyledView>
        <StyledText className="text-2xl text-center text-white font-semibold pt-10">
          Welcome
        </StyledText>
        <StyledText className="text-slate-200 pt-5 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab
          quidem tenetur laborum deleniti cumque obcaecati, sapiente sed
          provident! Iusto.
        </StyledText>
        <StyledView className="pt-[110%]">
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <StyledText className="text-[#0E0F35] text-center py-3 rounded-md bg-[#FFF3E8]">
              Get Started
            </StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Welcome;
