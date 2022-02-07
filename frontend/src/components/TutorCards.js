import React from "react";
import { Box, Image, Text, Link, Button, Stack } from "@chakra-ui/react";

function TutorCard(props) {
  const { product, summary, longLine } = props;

  return (
    <Box p={4} display={{ md: "flex" }} w="100%" borderWidth={1} margin={2}>
      <Stack>
        <Image
          w="50px"
          h="50px"
          margin="auto"
          src="./hero3.jpg"
          alt="Woman paying for a purchase"
        />
      </Stack>
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {product}
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {summary}
        </Link>
        <Text my={2} color="gray.500">
          {longLine}
        </Text>
        <Button maxWidth="100px" my={2}>
          Message
        </Button>
      </Stack>
    </Box>
  );
}

export default TutorCard;
