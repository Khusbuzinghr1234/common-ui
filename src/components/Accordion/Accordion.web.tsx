import { useState } from "react";
import { AccordionProps } from "./Accordion.types";
import { theme } from "../../theme/theme";

export const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.md }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: theme.spacing.lg,
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {title}
      </button>

      {open && (
        <div style={{ padding: theme.spacing.lg, background: theme.colors.surface }}>
          {children}
        </div>
      )}
    </div>
  );
};
