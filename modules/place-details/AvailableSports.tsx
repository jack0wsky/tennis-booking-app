import { ScrollView, StyleSheet } from "react-native";
import { Sport } from "../places/types";

interface AvailableSportsProps {
  sports: Sport[];
}

export const AvailableSports = ({ sports }: AvailableSportsProps) => {
  return <ScrollView style={styles.wrapper}></ScrollView>;
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
});
