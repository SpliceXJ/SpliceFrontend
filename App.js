import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Welcome from "./src/screens/auth/Welcome";
import { Screens } from "./src/screens/Screens";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </>
  );
}
