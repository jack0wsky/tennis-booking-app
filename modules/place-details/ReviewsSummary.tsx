import { StyleSheet, Text, View } from "react-native";
import { StarIcon } from "../shared/icons/StarIcon";
import { colors, Font } from "../shared/styles";
import { Link } from "expo-router";

interface ReviewsSummaryProps {
  placeId: string;
  reviewsAverage: string;
  amount: number;
}
export const ReviewsSummary = ({
  placeId,
  reviewsAverage,
  amount,
}: ReviewsSummaryProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.reviewsAverage}>
        <StarIcon size={22} />
        <Text style={styles.reviewsAverageLabel}>
          {reviewsAverage} ({amount})
        </Text>
      </View>

      <Link
        href={`/reviews?id=${placeId}`}
        style={{ color: colors.primary["900"] }}
      >
        See all reviews
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    padding: 10,
    width: "100%",
  },
  reviewsAverage: {
    alignItems: "center",
    display: "flex",
    columnGap: 8,
    flexDirection: "row",
  },
  reviewsAverageLabel: {
    fontSize: 16,
    fontFamily: Font.Medium,
  },
});
