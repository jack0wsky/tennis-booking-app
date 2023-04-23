import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
}
export const Button = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonContent}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F38051",
    borderRadius: 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: 42,
    width: "100%",
  },
  buttonContent: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Satoshi",
  },
});
