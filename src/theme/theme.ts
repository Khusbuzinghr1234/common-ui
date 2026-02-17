/**
 * Cross-platform Design Tokens
 * Works for React (Web) + React Native (Expo)
 * Do NOT put component styles here — only design decisions.
 */

export const theme = {
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
      inverse: "#FFFFFF",
    },

    border: "#E5E7EB",

    states: {
      success: "#16A34A",
      error: "#DC2626",
      warning: "#F59E0B",
      disabled: "#9CA3AF",
    },
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
    xxl: 32,
  },

  /**
   * BORDER RADIUS SCALE
   */
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    pill: 999,
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
      xxl: 32,
    },

    weight: {
      regular: "400" as const,
      medium: "500" as const,
      semibold: "600" as const,
      bold: "700" as const,
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
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
    desktop: 1280,
  },

  /**
   * ACCESSIBILITY TOKENS
   * Enforces WCAG + Apple + Google guidelines.
   */
  accessibility: {
    minTouchSize: 44, // Minimum tappable size (Apple HIG)
    focusOutlineWidth: 2,
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
      shadowOffset: { width: 0, height: 2 },
    },
    md: {
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
    },
  },
};

/**
 * Optional: export type-safe theme for autocompletion
 */
export type Theme = typeof theme;

