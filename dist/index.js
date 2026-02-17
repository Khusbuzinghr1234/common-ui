"use strict";
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

// src/theme/theme.ts
var theme = {
  /**
   * COLOR SYSTEM
   * Use semantic names instead of raw colors in components.
   */
  colors: {
    brand: "#4F46E5",
    background: "#FFFFFF",
    surface: "#F9FAFB",
    text: {
      primary: "#111827",
      secondary: "#6B7280",
      inverse: "#FFFFFF"
    },
    border: "#E5E7EB",
    states: {
      success: "#16A34A",
      error: "#DC2626",
      warning: "#F59E0B",
      disabled: "#9CA3AF"
    }
  },
  /**
   * SPACING SCALE (8pt grid system)
   * Never use random numbers like padding: 13
   */
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32
  },
  /**
   * BORDER RADIUS SCALE
   */
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    pill: 999
  },
  /**
   * TYPOGRAPHY SCALE
   * Enables accessibility scaling + consistency.
   */
  typography: {
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 32
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  /**
   * BREAKPOINTS (used by shared responsive hook)
   * React Native does NOT support media queries,
   * so we control responsiveness manually using these.
   */
  breakpoints: {
    phone: 0,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  },
  /**
   * ACCESSIBILITY TOKENS
   * Enforces WCAG + Apple + Google guidelines.
   */
  accessibility: {
    minTouchSize: 44,
    // Minimum tappable size (Apple HIG)
    focusOutlineWidth: 2
  },
  /**
   * SHADOWS (web + native compatible values)
   */
  shadow: {
    sm: {
      elevation: 2,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 }
    },
    md: {
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 }
    }
  }
};

// src/components/Button/Button.web.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ title, onPress, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "button",
  {
    onClick: onPress,
    disabled,
    style: {
      backgroundColor: theme.colors.brand,
      padding: theme.spacing.lg,
      borderRadius: theme.radius.md,
      minHeight: theme.accessibility.minTouchSize,
      color: theme.colors.text.inverse,
      fontWeight: theme.typography.weight.semibold,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer"
    },
    children: title
  }
);

// src/components/TextField/TextField.web.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextField = ({ label, value, onChange, placeholder }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: theme.spacing.sm }, children: [
  label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      value,
      placeholder,
      onChange: (e) => onChange == null ? void 0 : onChange(e.target.value),
      style: {
        border: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        minHeight: theme.accessibility.minTouchSize
      }
    }
  )
] });

// src/components/Accordion/Accordion.web.tsx
var import_react = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Accordion = ({ title, children }) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.md }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        onClick: () => setOpen(!open),
        style: {
          width: "100%",
          padding: theme.spacing.lg,
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer"
        },
        children: title
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { padding: theme.spacing.lg, background: theme.colors.surface }, children })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Button,
  TextField,
  theme
});
