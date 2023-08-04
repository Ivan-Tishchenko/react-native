import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./RegistrationScreen";

import { useFonts } from "expo-font";

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
    // <View style={styles.container}>
    //   <Text>react native hw 1</Text>
    //   <StatusBar style="auto" />
    // </View>
    <RegistrationScreen />
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
