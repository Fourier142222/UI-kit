import { ThemeMode, ThemeProvider, themes } from "./themes";

interface UIKitProviderProps {
  theme?: ThemeMode;
  children: React.ReactNode;
}

export const UIKitProvider = (props: UIKitProviderProps) => {
  const { children, theme = "dark" } = props;

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
