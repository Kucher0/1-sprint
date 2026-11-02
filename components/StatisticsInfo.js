
import { View, StyleSheet } from "react-native";
import InfoCard from "./InfoCard";
import MyWords from "../data/words";

export default function StatisticsInfo() {
  const toLearn = MyWords.filter(
    (word) => word.status === "to learn"
  ).length;

  const inProcess = MyWords.filter(
    (word) => word.status === "in process"
  ).length;

  const learned = MyWords.filter(
    (word) => word.status === "learned"
  ).length;

  return (
    <View style={styles.container}>
      <InfoCard
        color="hotpink"
        caption="To learn"
        number={toLearn}
      />

      <InfoCard
        color="lightgreen"
        caption="In process"
        number={inProcess}
      />

      <InfoCard
        color="lightblue"
        caption="Learned"
        number={learned}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
