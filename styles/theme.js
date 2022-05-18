import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Nunito, sans-serif",
        height: "100%",
        margin: "0px",
        fontWeight: "400",
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

export default myTheme;
