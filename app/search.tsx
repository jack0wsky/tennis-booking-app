import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PLACES } from "../modules/places/places";
import { PlaceListItem } from "../modules/places/components/PlaceListItem";

export default function Search() {
  return (
    <ScrollView style={styles.wrapper}>
      <FlatList
        data={PLACES}
        renderItem={({ item }) => <PlaceListItem place={item} key={item.id} />}
        style={{ paddingHorizontal: 20, paddingBottom: 90 }}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 100,
  },
  list: {
    gap: 12,
    height: "100%",
    paddingBottom: 20,
    flexGrow: 1,
  },
});
