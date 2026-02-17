import { View, Text, TextInput, StyleSheet } from "react-native";
import { TextFieldProps } from "./TextField.types";
import { theme } from "../../theme/theme";

export const TextField = ({ label, value, onChange, placeholder }: TextFieldProps) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      accessibilityLabel={label}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { gap: theme.spacing.sm },
  label: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.size.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    minHeight: theme.accessibility.minTouchSize,
  },
});
