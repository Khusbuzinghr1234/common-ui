import * as react_jsx_runtime from 'react/jsx-runtime';

declare const TextField: ({ label, value, onChange }: {
    label: any;
    value: any;
    onChange: any;
}) => react_jsx_runtime.JSX.Element;

declare const Button: ({ title, onPress }: {
    title: any;
    onPress: any;
}) => react_jsx_runtime.JSX.Element;

declare const Accordion: ({ question, answer }: {
    question: any;
    answer: any;
}) => react_jsx_runtime.JSX.Element;

declare const theme: {
    colors: {
        primary: string;
        background: string;
        text: string;
        border: string;
    };
    spacing: (n: number) => number;
    radius: number;
};

export { Accordion, Button, TextField, theme };
