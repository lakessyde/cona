import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/FrontPage/Footer";
import Header from "../components/FrontPage/Header";

import HeroImage from "../public/bg.jpg";
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Cona - Buy & Sell, Ethereum, and more with trust</title>
      </Head>
      <Flex
        flex={"1 1 auto"}
        flexDirection={"column"}
        minHeight={"-webkit-fit-content"}
        width={"100%"}
        maxWidth={"100%"}
        height={"100%"}
        backgroundColor={"transparent"}
      >
        <Box>
          <Box></Box>
          <Header />
        </Box>
      </Flex>
    </div>
  );
}
