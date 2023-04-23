import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../store";
import { Link, useRouter } from "expo-router";
import { Font } from "../modules/shared/styles";

export default function Page() {
  const { isLogged } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>

        <Link href="/login">Login</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontFamily: Font.Regular,
  },
});
