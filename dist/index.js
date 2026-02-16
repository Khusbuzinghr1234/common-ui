var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Button: () => Button,
  TextField: () => TextField,
  theme: () => theme
});
module.exports = __toCommonJS(index_exports);

// src/components/TextField.tsx
var import_react_native = require("react-native");

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
var import_jsx_runtime = require("react/jsx-runtime");
var TextField = ({ label, value, onChange }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, { style: styles.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: styles.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react_native.TextInput,
      {
        value,
        onChangeText: onChange,
        style: styles.input
      }
    )
  ] });
};
var styles = import_react_native.StyleSheet.create({
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
var import_react_native2 = require("react-native");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = ({ title, onPress }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Pressable, { style: styles2.button, onPress, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, { style: styles2.text, children: title }) });
var styles2 = import_react_native2.StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 14,
    borderRadius: theme.radius,
    alignItems: "center"
  },
  text: { color: "#fff", fontWeight: "600" }
});

// src/components/Accordion.tsx
var import_react = require("react");
var import_react_native3 = require("react-native");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Accordion = ({ question, answer }) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native3.View, { style: { marginBottom: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Pressable, { onPress: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { style: { fontWeight: "bold" }, children: question }) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native3.Text, { children: answer })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Button,
  TextField,
  theme
});
