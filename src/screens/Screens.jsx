import { createStackNavigator } from "@react-navigation/stack";
import ForgotPasswordScreen from "./auth/ForgotPasswordScreen";
import SigninScreen from "./auth/SigninScreen";
import SignupScreen from "./auth/SignupScreen";
import Welcome from "./auth/Welcome";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
