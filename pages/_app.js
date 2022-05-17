import { ChakraProvider, theme } from "@chakra-ui/react";
import mytheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mytheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
