import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";

export default function Footer() {
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      width={"100%"}
      maxWidth={"1180px"}
      margin={"0px auto"}
      padding={"100px 24px"}
      color={"rgb(255, 255, 255)"}
    >
      <Box width={"100%"}>
        <Box
          display={"grid"}
          gridTemplateColumns={"1fr 2fr"}
          width={"100%"}
          bg={"rgb(255, 255, 255)"}
        >
          <section>
            <Box padding={"0px 4px"} marginBottom={"30px"}>
              <Flex maxWidth={"200px"} marginBottom={"30px"}>
                <Image
                  src={Logo}
                  width={"40px"}
                  height={"40px"}
                  alt="Footer-Logo"
                />
                <Heading fontFamily={"inherit"} color={"#113355"}>
                  ona
                </Heading>
              </Flex>
              <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
                <Box
                  fontSize={"16px"}
                  color={"#113355"}
                  lineHeight={"1.3"}
                  opacity={"0.7"}
                  textDecoration={"none"}
                  fontFamily={"inherit"}
                  maxWidth={"200px"}
                  marginTop={"0px"}
                  marginBottom={"8px"}
                >
                  &copy; 2022 Cona
                </Box>
                <Flex flexDirection={"row"} color={"#113355"}>
                  <Link
                    href={""}
                    color={"#113355"}
                    lineHeight={"1.3"}
                    opacity={"0.7"}
                    textDecoration={"none"}
                    fontFamily={"inherit"}
                    maxWidth={"200px"}
                  >
                    Blog
                  </Link>
                  <Box
                    margin={"0px 3px"}
                    fontSize={"16px"}
                    color={"reg(91,97,110)"}
                  >
                    .
                  </Box>
                  <Link
                    href={"/"}
                    color={"#113355"}
                    lineHeight={"1.3"}
                    opacity={"0.7"}
                    textDecoration={"none"}
                    fontFamily={"inherit"}
                    maxWidth={"200px"}
                  >
                    Twitter
                  </Link>
                  <Box
                    margin={"0px 3px"}
                    fontSize={"16px"}
                    color={"reg(91,97,110)"}
                  >
                    .
                  </Box>
                  <Link
                    href={"/"}
                    color={"#113355"}
                    lineHeight={"1.3"}
                    opacity={"0.7"}
                    textDecoration={"none"}
                    fontFamily={"inherit"}
                    maxWidth={"200px"}
                  >
                    Instagram
                  </Link>
                </Flex>
              </Box>
            </Box>
          </section>
          <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"}>
            <Box>
              <Box
                padding={"0px 4px"}
                marginBottom={"30px"}
                color={"rgb(17, 51, 85)"}
              >
                <Heading
                  color={"rgb(17, 51, 85)"}
                  fontFamily={"inherit"}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                  marginBottom={"12px"}
                >
                  Support
                </Heading>
                <List>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Help Center</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Contact us</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>FAQ</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box>
              <Box
                padding={"0px 4px"}
                marginBottom={"30px"}
                color={"rgb(17, 51, 85)"}
              >
                <Heading
                  color={"rgb(17, 51, 85)"}
                  fontFamily={"inherit"}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                  marginBottom={"12px"}
                >
                  Individual
                </Heading>
                <List>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Buy & Sell</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Wallet</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>NFT</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box>
              <Box
                padding={"0px 4px"}
                marginBottom={"30px"}
                color={"rgb(17, 51, 85)"}
              >
                <Heading
                  color={"rgb(17, 51, 85)"}
                  fontFamily={"inherit"}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                  marginBottom={"12px"}
                >
                  Company
                </Heading>
                <List>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>About</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Blog</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Investors</Link>
                  </ListItem>
                  <ListItem marginBottom={"8px"}>
                    <Link href={"/"}>Legal & privacy</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
