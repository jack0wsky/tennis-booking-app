import { StyleSheet, Text, View } from "react-native";

export const Location = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mapWrapper}>
        <Text>Map</Text>
      </View>
      <View style={styles.address}>
        <View style={styles.iconWrapper}></View>
        <Text style={styles.addressLabel}>28 Jamie's Avenue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
    marginTop: 20,
    position: "relative",
    width: "100%",
  },
  mapWrapper: {
    backgroundColor: "#ddd",
    borderRadius: 20,
    height: 206,
    width: "100%",
  },
  address: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    display: "flex",
    columnGap: 12,
    flexDirection: "row",
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    bottom: 0,
    left: "5%",
    padding: 12,
    position: "absolute",
    width: "90%",
  },
  iconWrapper: {
    borderColor: "rgba(243,128,81,0.1)",
    borderWidth: 1,
    borderRadius: 12,
    height: 53,
    width: 53,
  },
  addressLabel: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    fontWeight: "600",
  },
});
