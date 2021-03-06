import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import myTheme from "../styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-COMPATIBLE" content="IE=edge"></meta>
          <meta property="og:type" name="og:type" content="website"></meta>

          <meta
            name="description"
            content="Cona is a secure plaftorm that easy to buy, sell and store crypto and nfts like Bitcoin, Ethereum, and more. Based in the USA,  Cona is available worldwides"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
