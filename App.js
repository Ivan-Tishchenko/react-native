import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./RegistrationScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import LoginScreen from "./LoginScreen";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    // Return a loading screen or any other component while the fonts are being loaded
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Create post">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
        />

        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
        />
        <MainStack.Screen
          name="Create post"
          component={CreatePostsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(179, 80,255)",
    alignItems: "center",
    justifyContent: "center",
  },
});
