import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const Button = ({ title, onPress }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 14,
    borderRadius: theme.radius,
    alignItems: "center"
  },
  text: { color: "#fff", fontWeight: "600" }
});
