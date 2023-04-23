import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Button } from "../shared/Button";

interface FiltersSheetProps {
  onClose: () => void;
}
export const FiltersSheet = ({ onClose }: FiltersSheetProps) => {
  const gesture = Gesture.Pan().onUpdate((event) => {});

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Filters</Text>
          <TouchableHighlight onPress={onClose}>
            <Text>close</Text>
          </TouchableHighlight>
        </View>

        <Button onClick={onClose}>Apply</Button>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 32,
    paddingTop: 20,
    paddingBottom: 32,
    paddingHorizontal: 24,
    zIndex: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontFamily: "Satoshi",
  },
});
