import React from "react";
import "./FindTutors.css";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import TutorCard from "./TutorCards";

const FindTutors = () => {
  const dataList = [
    {
      id: "1",
      product: "Tutor 1",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description",
    },
    {
      id: "2",
      product: "Tutor 2",
      summary: "Another summary, make sure that this is very responsives",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos",
    },
  ];

  const bgColor = useColorModeValue("gray.50 ", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.30 ", "whiteAlpha.30");

  return (
    <Container maxW="container.lg" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column", md: "row" }}
      >
        {/* left side deisgn */}

        <VStack
          w="25%"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg={bgColor}
        >
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">All Tutors</Heading>
            <Text color={secondaryTextColor}>
              Choose your desired tutor on the base of criteria you want.
            </Text>
          </VStack>
        </VStack>

        {/* right side deisgn */}

        <VStack
          w="75%"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <VStack>
            <Box>
              <SimpleGrid columns={[1, 1, 1, 1]}>
                {dataList.map(function (data) {
                  const { id, product, summary, longLine } = data;
                  return (
                    <TutorCard
                      key={id}
                      product={product}
                      summary={summary}
                      longLine={longLine}
                    />
                  );
                })}
              </SimpleGrid>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default FindTutors;
