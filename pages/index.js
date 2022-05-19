import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/FrontPage/Footer";
import Header from "../components/FrontPage/Header";

import { SiBitcoin } from "react-icons/si";
import { MdForward } from "react-icons/md";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import heroImg from "../public/hero.png";
import Property from "../components/Coins";

export default function Home({ propertiesForSale }) {
  const bg = useColorModeValue("rgb(255, 255, 255)", "gray.800");
  const cl = useColorModeValue("gray.600", "gray.400");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
        backgroundColor={bg}
      >
        <Box>
          <Box></Box>
          <Header />
          <Box
            display={"flex"}
            flexShrink={0}
            width={"100%"}
            margin={"0 auto"}
            paddingTop={"24px"}
            paddingBottom={"24px"}
            overflow={"hidden"}
            maxWidth={"1142px"}
            paddingLeft={{ base: "24px", md: "56px" }}
            paddingRight={{ base: "24px", md: "56px" }}
          >
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
                paddingTop={"100px"}
                paddingBottom={"111px"}
                flex={"1 1 0%"}
              >
                <Box
                  display={"flex"}
                  cursor={"pointer"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  color={"primary"}
                  fontWeight={"500"}
                >
                  <Icon
                    as={SiBitcoin}
                    w={"20px"}
                    h={"20px"}
                    borderWidth
                    alt={"bitcoin-icon"}
                  />
                  <Text ml={"10px"}>Jump start your portfolio</Text>
                  <Icon
                    as={MdForward}
                    w={"20px"}
                    h={"20px"}
                    ml={"5px"}
                    alt={"foward-icon"}
                  />
                </Box>
                <Heading
                  fontWeight={"500"}
                  fontFamily={"inherit"}
                  fontSize={{ base: "34px", md: "62px" }}
                  lineHeight={{ base: "40px", md: "inherit" }}
                  marginTop={"10px"}
                  marginBottom={"16px"}
                >
                  Jump start your crytpo portfolio
                </Heading>
                <Heading
                  fontWeight={"400"}
                  fontFamily={"inherit"}
                  fontSize={{ base: "16px", md: "20px" }}
                  lineHeight={{ base: "24px", md: "1.4" }}
                  marginBottom={"32px"}
                  color={cl}
                >
                  Cona is the easiest place to buy and sell cryptocurrency. Sign
                  up and get started today.
                </Heading>
              </Box>
              <Box
                display={{ base: "none", md: "flex" }}
                paddingTop={"10px"}
                paddingLeft={"20px"}
                justifyContent={"flex-end"}
                flex={"2 1 0%"}
              >
                <Image
                  src={heroImg}
                  height="500px"
                  width={"500px"}
                  alt="hero-nft-img"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box position={"relative"}>
          <Box
            display={"flex"}
            flexShrink={"0"}
            width={"100%"}
            margin={"0px auto"}
            flexDirection={"column"}
            padding={0}
            maxWidth={"1142px"}
            border={"1px solid rgba(var(--gray60),0.2)"}
            borderRadius={"4px"}
            boxShadow={"rgba(50,53,61,0.2)"}
          >
            <Box width={"100%"} borderRadius={"0"}>
              <Heading>
                {" "}
                {propertiesForSale.map((property) => (
                  <Property property={property} key={property.uuid} />
                ))}{" "}
              </Heading>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/coins?referenceCurrencyUuid=yhjMzLPhuIDl`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.data.coins,
    },
  };
}
