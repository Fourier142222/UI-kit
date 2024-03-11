import { createUseStyles } from "react-jss";
import { UIKitElementTheme } from "../../themes/themes";
import { fontSizes } from "../../themes/typography";

export const useStyles = createUseStyles((theme: UIKitElementTheme) => ({
  input: {
    fontSizes: fontSizes.medium.fontSize,
    width: 250,
    color: theme.input.textColor,
    background: "none",
    border: `1px solid ${theme.input.borderColor}`,
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    padding: "10px 14px",
    "&:hover": {
      background: theme.input.hoverColor
    }
  },

  readonly: {
    pointerEvents: "none",
    opacity: 0.7
  },

  wrapper: {
    marginTop: 20
  },
}));
