import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../styles/theme";
import "../styles/nprogress.css";

import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
