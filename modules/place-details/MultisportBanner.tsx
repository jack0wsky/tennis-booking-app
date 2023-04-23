import { StyleSheet, Text, View, Image } from "react-native";

export const MultisportBanner = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require("../../assets/images/multisport-logo.png")} />
      <Text style={styles.text}>Get 40% discount with Multisport</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "#232B77",
    borderRadius: 16,
    display: "flex",
    columnGap: 16,
    flexDirection: "row",
    height: 64,
    padding: 12,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SatoshiMedium",
    fontWeight: "600",
  },
});
