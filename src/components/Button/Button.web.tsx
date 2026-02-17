import { ButtonProps } from "./Button.types";
import { theme } from "../../theme/theme";

export const Button = ({ title, onPress, disabled }: ButtonProps) => (
  <button
    onClick={onPress}
    disabled={disabled}
    style={{
      backgroundColor: theme.colors.brand,
      padding: theme.spacing.lg,
      borderRadius: theme.radius.md,
      minHeight: theme.accessibility.minTouchSize,
      color: theme.colors.text.inverse,
      fontWeight: theme.typography.weight.semibold,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    {title}
  </button>
);
