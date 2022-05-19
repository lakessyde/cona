import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import DefaultImage from "../public/logo.svg";

const pp = Math.round;
const Coins = ({ property: { iconUrl, change, name, price } }) => (
  <Flex
    h={"70px"}
    borderRadius={"10"}
    m={5}
    border={"1px solid"}
    alignItems="center"
  >
    <Box m={5}>
      <Image
        src={iconUrl ? iconUrl : DefaultImage}
        alt="coin-symbol"
        width={25}
        height={25}
      />
    </Box>
    <Box paddingRight={"10"}>
      <Text>{name ? name : "No connection"}</Text>
    </Box>
    <Box ml={8}>${Math.round(price ? price : "No connection")}</Box>
  </Flex>
);

export default Coins;
