
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import StatisticsInfo from "./components/StatisticsInfo";
import ImagePile from "./components/ImagePile";

export default function App() {
  return (
    <View style={styles.container}>
      <StatisticsInfo />
      <ImagePile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
});
