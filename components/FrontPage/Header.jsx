import {
  Box,
  Button,
  Heading,
  IconButton,
  Text,
  Drawer,
  DrawerContent,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { CgClose, CgMenuHotdog } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useEffect } from "react";

import MenuLink from "../Menu/MenuLink";

const LinkItems = [
  { label: "Prices", href: "/" },
  { label: "Buy & Sell", href: "/" },
  { label: "About us", href: "/" },
  { label: "Contact us", href: "/" },
  { label: "Indivdiuals", href: "/" },
  ,
];
import Logo from "../../public/logo.svg";
import { useRouter } from "next/router";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("rgb(255, 255, 255)", "gray.800");
  const color = useColorModeValue("rgb(255, 255, 255)", "rgb(5, 15, 25)");
  const bb = useColorModeValue(
    "1px solid rgb(236, 239, 241)",
    "1px solid rgba(255, 255, 255, 0.16)"
  );

  function getStarted() {
    return <Link href={"auth/signup"} />;
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);

    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <>
      <Box
        position={{ base: "fixed", md: "sticky" }}
        width={"100%"}
        height={{ base: "58px", height: "67px" }}
        zIndex={2}
        top={"0px"}
        background={bg}
        borderBottom={bb}
      >
        <Box
          display={"flex"}
          padding={"0px 20px"}
          alignItems={"stretch"}
          maxWidth={"1180px"}
          margin={"0px auto"}
          boxSizing="content-box"
          height={{ base: "58px", md: "0px" }}
          minHeight={{ base: "0px", md: "66px" }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            paddingBottom={"3px"}
            flex={"2 1 0%"}
          >
            <Link
              href=""
              display={"inline-flex"}
              textDecoration={"none"}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                display={"inline-flex"}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  src={Logo}
                  width={"40px"}
                  height={"40px"}
                  alt={"Cona Logo"}
                  position={"relative"}
                />
                <Heading fontFamily={"inherit"} color={"primary"}>
                  ona
                </Heading>
              </Box>
            </Link>
          </Box>
          <Box
            display={{ base: "none", md: "none", lg: "none", xl: "inherit" }}
          >
            {LinkItems.map((link, i) => (
              <MenuLink color={color} key={i} link={link} />
            ))}
          </Box>
          <Box
            display={"flex"}
            padding={"15px 0px"}
            flex={"2 1 0%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Link
              href="auth/login"
              textDecoration={"none !important"}
              cursor={"pointer"}
            >
              <Text
                display={{
                  base: "none",
                  md: "none",
                  lg: "none",
                  xl: "inherit",
                }}
                marginRight={"20px"}
                fontWeight={"600"}
                lineHeight={"16px"}
                cursor={"pointer"}
              >
                Sign in
              </Text>
            </Link>

            <Button
              display={{ base: "none", md: "inherit" }}
              backgroundColor={"primary"}
              fontSize={"14px"}
              fontWeight={"600"}
              color={color}
              borderRadius={"4px"}
              onClick={() => (window.location.href = "auth/signup")}
              _hover={{ background: "primary" }}
              marginRight={"5px"}
            >
              Get Started
            </Button>
            <IconButton
              margin={{ base: "10px -10px 10px 5px", md: "10px" }}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              variant={"ghost"}
              padding="10px"
            />
            <IconButton
              display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
              icon={isOpen ? <CgClose /> : <CgMenuHotdog />}
              variant={"ghost"}
              padding="10px"
              margin={"10px -15px 10px 5px"}
              _focus={{ background: "none", color: "none" }}
              onClick={onOpen}
            />

            <Box>
              <Drawer
                isOpen={isOpen}
                placement={"right"}
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"full"}
              >
                <DrawerContent marginTop={"59px"}>
                  <Box
                    display={{
                      base: "block",
                      md: "block",
                    }}
                    padding={"5px 10px"}
                  >
                    {LinkItems.map((link, i) => (
                      <MenuLink key={i} link={link} />
                    ))}
                    <Box alignItems={"center"} padding={"5px 18px"}>
                      <Button
                        alignItems={"center"}
                        variant={"outline"}
                        fontSize={"14px"}
                        width={"100%"}
                        fontWeight={"600"}
                        borderRadius={"4px"}
                        borderWidth={"1px"}
                        borderColor={"primary"}
                        _hover={{ background: "primary" }}
                      >
                        Sign in
                      </Button>
                      <Button
                        marginTop={"10px"}
                        alignItems={"center"}
                        backgroundColor={"primary"}
                        fontSize={"14px"}
                        width={"100%"}
                        fontWeight={"600"}
                        borderRadius={"4px"}
                        borderWidth={"1px"}
                        borderColor={"primary"}
                        _hover={{ background: "primary" }}
                      >
                        Get Started
                      </Button>
                    </Box>
                  </Box>
                </DrawerContent>
              </Drawer>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
