import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../styles/theme";
import "../styles/nprogress.css";

import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", NProgress.start);
  Router.events.on("routeChangeError", NProgress.done);
  Router.events.on("routeChangeComplete", NProgress.done);
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
