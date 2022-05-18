import {
  Box,
  Flex,
  Heading,
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



export default function Home() {
  const bg = useColorModeValue("rgb(255, 255, 255)", "gray.800");
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
            flexShrink={"0"}
            width={"100%"}
            margin="0 auto"
            paddingTop={{ base: "24px", md: "24px" }}
            paddingBottom={{ base: "24px", md: "24px" }}
            paddingLeft={{ base: "24px", md: "56px" }}
            paddingRight={{ base: "24px", md: "56px" }}
            maxWidth={"1142px"}
            overflow={"hidden"}
          >
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                flexDir={"column"}
                paddingBottom={"111px"}
                flex={"1 1 0%"}
              >
                <Box display={"flex"} alignItems={"center"} flexDirection="row">
                  <Box
                    display="flex"
                    alignItems={"flex-start"}
                    flexDirection="column"
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
                      fontWeight={"bold"}
                    >
                      <SiBitcoin style={{ width: "24px", height: "24px" }} />
                      <Text ml={1} fontSize={{ base: "14px", md: "16px" }}>
                        Own a crypto portfolio today
                      </Text>
                      <MdForward
                        ml={4}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </Box>
                    <Heading
                      fontFamily={"inherit"}
                      fontSize={{ base: "34px", md: "62px" }}
                      fontWeight={"600"}
                      lineHeight={{ base: "40px", md: "1.15" }}
                      maxWidth={{ base: "100%", md: "100%", lg: "425px" }}
                      marginTop={"20px"}
                      marginBottom={"16px"}
                    >
                      Jump start your crypto portfolio
                    </Heading>
                    <Heading lineHeight="1.4" fontSize="20px"fontWeight={500} color={'gray.500'}>
                      Coinbase is the easiest place to buy and sell<br></br>
                      cryptocurrency. Sign up and get started today.
                    </Heading>
                    <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} minWidth={'480px'}></Box>
                  </Box>
                  <Box></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
