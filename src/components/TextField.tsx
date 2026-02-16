import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const TextField = ({ label, value, onChange }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: theme.spacing(2) },
  label: { marginBottom: 4, color: theme.colors.text },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius,
    padding: 12
  }
});
