
import { View, Text, StyleSheet } from "react-native";

const InfoCard = ({ color, caption, number }) => {
  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={[styles.number, { color: color }]}>
        {number}
      </Text>

      <Text style={[styles.caption, { color: color }]}>
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
  },

  number: {
    fontSize: 24,
    fontWeight: "bold",
  },

  caption: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default InfoCard;
