import { Box, Text } from "@chakra-ui/react";

const Property = ({ property: { price } }) => (
  <Box>
    <Text>{price}</Text>
  </Box>
);

export default Property;
