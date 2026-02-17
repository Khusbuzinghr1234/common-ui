import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    disabled?: boolean;
}

declare const Button: ({ children, onPress, disabled }: ButtonProps) => react_jsx_runtime.JSX.Element;

type TextFieldProps = {
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: (text: string) => void;
};

declare const TextField: ({ label, value, onChange, placeholder }: TextFieldProps) => react_jsx_runtime.JSX.Element;

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

declare const Accordion: ({ title, children }: AccordionProps) => react_jsx_runtime.JSX.Element;

/**
 * Cross-platform Design Tokens
 * Works for React (Web) + React Native (Expo)
 * Do NOT put component styles here — only design decisions.
 */
declare const theme: {
    /**
     * COLOR SYSTEM
     * Use semantic names instead of raw colors in components.
     */
    colors: {
        brand: string;
        background: string;
        surface: string;
        text: {
            primary: string;
            secondary: string;
            inverse: string;
        };
        border: string;
        states: {
            success: string;
            error: string;
            warning: string;
            disabled: string;
        };
    };
    /**
     * SPACING SCALE (8pt grid system)
     * Never use random numbers like padding: 13
     */
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    /**
     * BORDER RADIUS SCALE
     */
    radius: {
        sm: number;
        md: number;
        lg: number;
        pill: number;
    };
    /**
     * TYPOGRAPHY SCALE
     * Enables accessibility scaling + consistency.
     */
    typography: {
        size: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
        weight: {
            regular: "400";
            medium: "500";
            semibold: "600";
            bold: "700";
        };
        lineHeight: {
            tight: number;
            normal: number;
            relaxed: number;
        };
    };
    /**
     * BREAKPOINTS (used by shared responsive hook)
     * React Native does NOT support media queries,
     * so we control responsiveness manually using these.
     */
    breakpoints: {
        phone: number;
        tablet: number;
        laptop: number;
        desktop: number;
    };
    /**
     * ACCESSIBILITY TOKENS
     * Enforces WCAG + Apple + Google guidelines.
     */
    accessibility: {
        minTouchSize: number;
        focusOutlineWidth: number;
    };
    /**
     * SHADOWS (web + native compatible values)
     */
    shadow: {
        sm: {
            elevation: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowRadius: number;
            shadowOffset: {
                width: number;
                height: number;
            };
        };
        md: {
            elevation: number;
            shadowColor: string;
            shadowOpacity: number;
            shadowRadius: number;
            shadowOffset: {
                width: number;
                height: number;
            };
        };
    };
};
/**
 * Optional: export type-safe theme for autocompletion
 */
type Theme = typeof theme;

export { Accordion, type AccordionProps, Button, type ButtonProps, TextField, type TextFieldProps, type Theme, theme };
