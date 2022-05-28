import {useHistory} from "react-router" 
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/FrontPage/Footer";
import Header from "../components/FrontPage/Header";

import { SiBitcoin } from "react-icons/si";
import { MdForward } from "react-icons/md";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import heroImg from "../public/hero.png";
import Coins from "../components/Coins";

export default function Home({ propertiesForSale }) {
  const navigator = useHistory();
  const bg = useColorModeValue("rgb(255, 255, 255)", "gray.800");
  const cl = useColorModeValue("gray.600", "gray.400");

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
                <Box
                  display={"flex"}
                  minWidth={{ base: "0px", md: "auto", lg: "480px" }}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  width={"100%"}
                >
                  <form style={{ width: "100%" }}>
                    <Box
                      display={"flex"}
                      flexDirection={{ base: "column", md: "row" }}
                      width={"100%"}
                    >
                      <Box
                        display={"flex"}
                        flex={"1 1 auto"}
                        flexDirection={"row"}
                        position={"relative"}
                        borderWidth={"1px"}
                        borderStyle={"solid"}
                        borderColor={"rgba(91,97,110,0.2)"}
                        borderRadius={"4px"}
                        fontSize={"18px"}
                      >
                        <Input
                          type={"email"}
                          placeholder={"Email"}
                          padding={"20px"}
                          borderRadius={"4px"}
                          height={"auto"}
                        />
                      </Box>
                      <Box
                        marginLeft={{ base: "0", md: "16px" }}
                        marginTop={{ base: "8px", md: "auto" }}
                      >
                        <Button
                          position={"relative"}
                          width={"100%"}
                          padding={"24px"}
                          height={"auto"}
                          fontSize={"16px"}
                          background={"primary"}
                        >
                          Get Started
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Box>
              <Box
                display={{ base: "none", md: "none", lg: "flex" }}
                paddingTop={"10px"}
                paddingLeft={"15px"}
                justifyContent={"flex-end"}
                flex={"2 1 0%"}
              >
                <Image
                  src={heroImg}
                  width={"400px"}
                  height={"400px"}
                  alt={"hero-section-img"}
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
            <SimpleGrid minChildWidth="300px" spacing="20px">
              {propertiesForSale.map((property) => (
                <Coins property={property} key={property.uuid} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Footer />
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  try{
    const propertyForSale = await fetchApi(
      `${baseUrl}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&limit=6`
    );
    return {
      props:{
        propertiesForSale : propertyForSale?.data.coins,
      }
    }
  }catch (err) {
    console.log("this is the error",err);
  }
}


