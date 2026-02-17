import { TextFieldProps } from "./TextField.types";
import { theme } from "../../theme/theme";

export const TextField = ({ label, value, onChange, placeholder }: TextFieldProps) => (
  <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.sm }}>
    {label && <label>{label}</label>}
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        border: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        minHeight: theme.accessibility.minTouchSize,
      }}
    />
  </div>
);
