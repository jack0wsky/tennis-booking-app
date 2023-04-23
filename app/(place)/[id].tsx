import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import { MultisportBanner } from "../../modules/place-details/MultisportBanner";
import { PLACES } from "../../modules/places/places";
import { Location } from "../../modules/place-details/Location";
import { ReviewsSummary } from "../../modules/place-details/ReviewsSummary";
import { AvailableSports } from "../../modules/place-details/AvailableSports";

const findPlace = (id: string) => {
  return PLACES.find((place) => place.id === id);
};

export default function PlaceDetails() {
  const searchParam = useSearchParams<{ id: string }>();

  const placeDetails = findPlace(searchParam.id as string);

  if (!placeDetails) return null;

  return (
    <SafeAreaView>
      <View style={styles.pageWrapper}>
        <MultisportBanner />
        <Location />

        <View style={styles.content}>
          <Text style={styles.name}>{placeDetails.name}</Text>
        </View>

        <ReviewsSummary
          placeId={placeDetails.id}
          reviewsAverage={placeDetails.reviews.average}
          amount={placeDetails.reviews.amount}
        />

        <AvailableSports />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 32,
  },
  name: {
    fontSize: 24,
    fontFamily: "SatoshiBold",
  },
});
