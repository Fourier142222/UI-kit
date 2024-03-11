import { createUseStyles } from "react-jss";
import { UIKitElementTheme } from "../../themes/themes";
import { fontSizes } from "../../themes/typography";

export const useStyles = createUseStyles((theme: UIKitElementTheme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 15px",
    color: theme.button.textColor,
    textOverflow: "ellipsis",
    border: "none",
    background: "none",
    cursor: "pointer",
    borderRadius: 5,
    boxShadow: " 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%)",
    transition: "all .3s ease",
    "&:hover": {
      background: theme.button.hoverColor,
    },
  },

  size_m: {
    height: 32,
    fontSize: fontSizes.medium.fontSize,
    lineHeight: fontSizes.medium.lineHeight,
  },

  size_l: {
    height: 40,
    fontSize: fontSizes.large.fontSize,
    lineHeight: fontSizes.large.lineHeight,
  },

  size_xl: {
    height: 48,
    fontSize: fontSizes.extraLarge.fontSize,
    lineHeight: fontSizes.extraLarge.lineHeight,
  },

  disabled: {
    opacity: 0.6,
    pointerEvents: "none",
  },

  clear: {
    border: "none",
    outline: "none",
  },

  outline: {
    border: `2px solid ${theme.button.borderColor}`,
  },

  background: {
    border: "none",
    backgroundColor: theme.button.bgColor,
  },
}));
