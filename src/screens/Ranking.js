import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";

const Ranking = () => {
  const Colors = [
    ["#FBC2EB", "#A18CD1"],
    ["#96E6A1", "#D4FC79"],
    ["#FDA085", "#F6D365"],
    ["#66A6FF", "#89F7FE"]
  ];
  return (
    <View style={styles.containerWeeks}>
      <Text style={styles.titleWeeks}>Ranking</Text>
      <LinearGradient
        colors={Colors[0]}
        start={[0, 0]}
        end={[0.9, 0.9]}
        style={styles.HeaderRanking}
      ></LinearGradient>
    </View>
  );
};

export default Ranking;
