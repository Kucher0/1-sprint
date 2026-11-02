import { View, Image, StyleSheet } from "react-native";

export default function ImagePile() {
  return (
    <View style={styles.container}>
      {/* "Земля" - це не картинка, а View, стиснутий у овал */}
      <View style={styles.ground} />

      <Image
        source={require("../assets/palmtree.png")}
        style={styles.palmBig}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/palmtree.png")}
        style={styles.palmSmall}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/grass.png")}
        style={styles.grass}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/elephant.png")}
        style={styles.elephant}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/palmtree.png")}
        style={styles.palmRight}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    alignItems: "center",
  },

  ground: {
    position: "absolute",
    bottom: 120,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: "gray",
    opacity: 0.7,
    transform: [{ scaleY: 0.4 }],
  },

  palmBig: {
    position: "absolute",
    width: 130,
    height: 150,
    bottom: 200,
    left: 55,
  },

  palmSmall: {
    position: "absolute",
    width: 90,
    height: 100,
    bottom: 215,
    left: 20,
  },

  grass: {
    position: "absolute",
    width: 80,
    height: 100,
    bottom: 205,
    left: 170,
  },

  elephant: {
    position: "absolute",
    width: 110,
    height: 80,
    bottom: 175,
    left: 185,
  },

  palmRight: {
    position: "absolute",
    width: 80,
    height: 90,
    bottom: 215,
    right: 25,
  },
});