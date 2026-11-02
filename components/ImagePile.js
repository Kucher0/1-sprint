
import { View, Image, StyleSheet } from "react-native";

export default function ImagePile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/palmtree.png")}
        style={styles.palm}
        resizeMode="contain"
      />

      <Image
        source={require("../assets/elephant.png")}
        style={styles.elephant}
        resizeMode="contain"
      />

      <Image
        source={require("../assets/grass.png")}
        style={styles.grass}
        resizeMode="stretch"
      />

      <Image
        source={require("../assets/grass.png")}
        style={styles.grassLeft}
        resizeMode="stretch"
      />

      <Image
        source={require("../assets/grass.png")}
        style={styles.grassRight}
        resizeMode="stretch"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
  },

  palm: {
    position: "absolute",
    width: 180,
    height: 220,
    bottom: 30,
    left: 10,
  },

  elephant: {
    position: "absolute",
    width: 180,
    height: 170,
    bottom: 30,
    right: 10,
  },

  grass: {
    position: "absolute",
    width: "100%",
    height: 60,
    bottom: 0,
  },

  grassLeft: {
    position: "absolute",
    width: 100,
    height: 40,
    bottom: 10,
    left: 0,
  },

  grassRight: {
    position: "absolute",
    width: 100,
    height: 40,
    bottom: 10,
    right: 0,
  },
});
