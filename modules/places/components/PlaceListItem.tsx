import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Place } from "../types";
import { useRouter } from "expo-router";

interface PlaceListItemProps {
  place: Place;
}

export const PlaceListItem = ({ place }: PlaceListItemProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/${place.id}`)}>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={styles.name}>{place.name}</Text>
        </View>

        <View style={styles.details}>
          <Text>1.2km from you</Text>
          <Text style={styles.reviews}>
            {place.reviews.average} ({place.reviews.amount})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#5e5e5e",
    shadowOffset: { height: 14, width: 0 },
    shadowRadius: 40,
    shadowOpacity: 0.2,
  },
  heading: {
    display: "flex",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SatoshiMedium",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  reviews: {
    fontSize: 14,
  },
});
