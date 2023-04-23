import { Text, View } from "react-native";
import { Review } from "../places/types";

interface ReviewListItemProps {
  review: Review;
}

export const ReviewListItem = ({ review }: ReviewListItemProps) => (
  <View>
    <Text>{review.author.name}</Text>
  </View>
);
