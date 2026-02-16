// src/components/TextField.tsx
import { View, Text, TextInput, StyleSheet } from "react-native";

// src/theme/theme.ts
var theme = {
  colors: {
    primary: "#4F46E5",
    background: "#FFFFFF",
    text: "#111827",
    border: "#E5E7EB"
  },
  spacing: (n) => n * 8,
  radius: 8
};

// src/components/TextField.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var TextField = ({ label, value, onChange }) => {
  return /* @__PURE__ */ jsxs(View, { style: styles.wrapper, children: [
    /* @__PURE__ */ jsx(Text, { style: styles.label, children: label }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        value,
        onChangeText: onChange,
        style: styles.input
      }
    )
  ] });
};
var styles = StyleSheet.create({
  wrapper: { marginBottom: theme.spacing(2) },
  label: { marginBottom: 4, color: theme.colors.text },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius,
    padding: 12
  }
});

// src/components/Button.tsx
import { Pressable, Text as Text2, StyleSheet as StyleSheet2 } from "react-native";
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = ({ title, onPress }) => /* @__PURE__ */ jsx2(Pressable, { style: styles2.button, onPress, children: /* @__PURE__ */ jsx2(Text2, { style: styles2.text, children: title }) });
var styles2 = StyleSheet2.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 14,
    borderRadius: theme.radius,
    alignItems: "center"
  },
  text: { color: "#fff", fontWeight: "600" }
});

// src/components/Accordion.tsx
import { useState } from "react";
import { View as View2, Text as Text3, Pressable as Pressable2 } from "react-native";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs2(View2, { style: { marginBottom: 12 }, children: [
    /* @__PURE__ */ jsx3(Pressable2, { onPress: () => setOpen(!open), children: /* @__PURE__ */ jsx3(Text3, { style: { fontWeight: "bold" }, children: question }) }),
    open && /* @__PURE__ */ jsx3(Text3, { children: answer })
  ] });
};
export {
  Accordion,
  Button,
  TextField,
  theme
};
