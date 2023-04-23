import { StyleSheet, Text, TextInput, View } from "react-native";
import { TextInputIOSProps } from "react-native";

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  contentType: TextInputIOSProps['textContentType'];
}
export const Input = ({
  label,
  value,
  placeholder,
  onChange,
  contentType,
}: InputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        textContentType={contentType}
        autoCorrect={false}
        keyboardType='visible-password'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginLeft: 12,
  },
  input: {
    padding: 12,
    borderColor: "#ddd",
    borderWidth: 1.5,
    marginTop: 4,
  },
});
