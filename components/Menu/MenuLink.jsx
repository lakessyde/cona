import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function MenuLink({ link, ...rest }) {
  const { label, href } = link;

  return (
    <Link
      href={href}
      display={{ base: "block", md: "block", lg: "block", xl: "flex" }}
    >
      <Box display="flex" lineHeight="15px" cursor={"pointer"} {...rest}>
        <Box
          margin={{
            base: "10px 18px",
            md: "10px 18px",
            lg: "10px 18px",
            xl: "0px 18px",
          }}
          display={"inline-flex"}
          alignItems={"center"}
          position={"relative"}
          color="primary"
          _hover={{ borderBottom: "2px" }}
        >
          <Text
            fontSize={{ base: "16px", md: "14px" }}
            fontWeight={"600"}
            textAlign={"center"}
            color={"rgb(5, 15, 25)"}
          >
            {label}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
