import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Nunito, sans-serif",
        height: "100%",
        margin: "0px",
        fontWeight: "400",
        lineHeight: "1.15",
        textDecoration: "none"
      },

      "*": {
        boxSizing: "border-box",
      },
      "*, ::after, ::before": {
        borderStyle: "solid",
        borderWidth: "0",
      },
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: "false",
  },

  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },

  colors: {
    primary: "#ffbb44",
  },
});

export default Theme;
