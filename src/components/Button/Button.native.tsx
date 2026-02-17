import { Pressable, Text, StyleSheet } from "react-native";
import { ButtonProps } from "./Button.types";
import { theme } from "../../theme/theme";

export const Button = ({ children, onPress, disabled }: ButtonProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityState={{ disabled }}
    disabled={disabled}
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      pressed && styles.pressed,
      disabled && styles.disabled,
    ]}
  >
    <Text style={styles.text}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    minHeight: theme.accessibility.minTouchSize,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.weight.semibold,
    fontSize: theme.typography.size.md,
  },
  pressed: { opacity: 0.7 },
  disabled: { opacity: 0.4 },
});
