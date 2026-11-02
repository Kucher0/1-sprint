import { View, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import StatisticsInfo from "./components/StatisticsInfo";
import ImagePile from "./components/ImagePile";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/ocean.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <StatisticsInfo />
        <ImagePile />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
});