import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../styles/theme";
import NProgress from "nprogress";

import nprogress from "nprogress";

function MyApp({ Component, pageProps }) {
  nprogress.configure({ showSpinner: false });


  Router.events.on("routeChangeStart", () => {
    nprogress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    nprogress.done();
  });
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
