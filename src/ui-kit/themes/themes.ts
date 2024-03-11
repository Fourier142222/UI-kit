import React from "react";
import { createTheming } from "react-jss";
import { pallete } from "./pallete";

type ColorValue<T extends string> = Record<T, number | string>;

export interface UIKitElementTheme {
  button: ColorValue<"textColor" | "bgColor" | "borderColor" | "hoverColor">;
  input: ColorValue<"textColor" | "borderColor" | "hoverColor">;
}

export type ThemeMode = "dark" | "light";

export const themes: Record<ThemeMode, UIKitElementTheme> = {
  light: {
    button: {
      textColor: pallete.black,
      bgColor: pallete.primarYellow,
      hoverColor: pallete.secondarYellow,
      borderColor: pallete.primarYellow,
    },
    input: {
      textColor: pallete.black,
      hoverColor: pallete.secondarYellow,
      borderColor: pallete.primarYellow,
    },
  },
  dark: {
    button: {
      textColor: pallete.gray,
      bgColor: pallete.primaryBlue,
      hoverColor: pallete.secondaryBlue,
      borderColor: pallete.primaryBlue,
    },
    input: {
      textColor: pallete.primaryBlue,
      hoverColor: pallete.secondaryBlue,
      borderColor: pallete.primaryBlue,
    },
  },
};

export const uiKitThemeContex = React.createContext(themes.dark);

const uiKitTheming = createTheming(uiKitThemeContex);

export const { useTheme, ThemeProvider } = uiKitTheming;
