import { Story } from "@storybook/react";
import { ThemeMode, ThemeProvider, themes } from "../../themes/themes";

export const ThemeDecorator = (theme: ThemeMode) => (StoryComponent: Story) => (
  <ThemeProvider theme={themes[theme]}>
    <StoryComponent />
  </ThemeProvider>
);
