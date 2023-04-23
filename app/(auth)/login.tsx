import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "../../modules/shared/Input";
import { useState } from "react";
import { useAuth } from "../../store";
import { useRouter } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            value={username}
            onChange={setUsername}
            placeholder="Your username"
            contentType="username"
          />

          <Input
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="Your password"
            contentType="password"
          />
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            marginTop: 24,
          }}
          onPress={() => {
            login();
            router.push("/");
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    gap: 16,
  },
});
