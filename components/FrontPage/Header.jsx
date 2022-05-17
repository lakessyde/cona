import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { CgClose, CgMenuHotdog } from "react-icons/cg";
import React from "react";

import MenuLink from "../Menu/MenuLink";

const LinkItems = [
  { label: "Prices", href: "/" },
  { label: "Buy & Sell", href: "/" },
  { label: "Company", href: "/" },
  { label: "Indivdiuals", href: "/" },
  { label: "Indivdiuals", href: "/" },
  { label: "Indivdiuals", href: "/" },
];
import Logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);

    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <>
      <Box
        position={{ base: "sticky", md: "sticky" }}
        width={"100%"}
        height={{ base: "58px", height: "67px" }}
        zIndex={2}
        top={"0px"}
        background={"rgb(255, 255, 255)"}
        borderBottom={"1px solid rgb(236, 239, 241)"}
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
            </Link>
          </Box>
          <Box
            display={{ base: "none", md: "none", lg: "none", xl: "inherit" }}
          >
            {LinkItems.map((link, i) => (
              <MenuLink key={i} link={link} />
            ))}
          </Box>
          <Box
            display={"flex"}
            padding={"15px 0px"}
            flex={"2 1 0%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text
              display={{ base: "none", md: "none", lg: "none", xl: "inherit" }}
              marginRight={"20px"}
              fontWeight={"600"}
              lineHeight={"16px"}
            >
              Sign in
            </Text>
            <Button
              backgroundColor={"primary"}
              fontSize={"14px"}
              fontWeight={"600"}
              borderRadius={"4px"}
              _hover={{ background: "primary" }}
            >
              Get Started
            </Button>

            <IconButton
              display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
              icon={isOpen ? <CgClose /> : <CgMenuHotdog />}
              variant={"ghost"}
              padding="10px"
              margin={"10px -10px 10px 20px"}
              _focus={{ background: "none", color: "none" }}
              onClick={onOpen}
            />
            <Box>
              <Drawer
                isOpen={isOpen}
                placement={"right"}
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerContent marginTop={"69px"}>
                  <Box
                    display={{
                      base: "block",
                      md: "none",
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
