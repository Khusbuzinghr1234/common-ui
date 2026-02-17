import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { AccordionProps } from "./Accordion.types";
import { theme } from "../../theme/theme";

export const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>

      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.md },
  header: { padding: theme.spacing.lg },
  title: { fontSize: theme.typography.size.md, fontWeight: theme.typography.weight.medium },
  content: { padding: theme.spacing.lg, backgroundColor: theme.colors.surface },
});
