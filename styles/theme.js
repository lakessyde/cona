import { extendTheme } from "@chakra-ui/react";

const mytheme = extendTheme({
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

  colors: {
    primary: "#ffbb44",
  },
});

export default mytheme;
