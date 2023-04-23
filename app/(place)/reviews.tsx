import { FlatList, StyleSheet, Text, View } from "react-native";
import { Font } from "../../modules/shared/styles";
import { useSearchParams } from "expo-router";
import { PLACES } from "../../modules/places/places";
import { ReviewListItem } from "../../modules/place-details/ReviewListItem";

const findReviews = (id: string) => {
  const currentPlace = PLACES.find((place) => place.id === id);

  return currentPlace?.reviewsList;
};

export default function PlaceReviews() {
  const params = useSearchParams<{ id: string }>();

  const reviews = findReviews(params.id as string);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Reviews</Text>
      </View>

      {!!reviews?.length && (
        <FlatList
          data={reviews}
          renderItem={({ item, index }) => (
            <ReviewListItem key={index} review={item} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  header: {
    display: "flex",
  },
  title: {
    fontSize: 24,
    fontFamily: Font.Bold,
  },
});
