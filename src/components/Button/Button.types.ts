import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;   // instead of title
  onPress: () => void;
  disabled?: boolean;
}
