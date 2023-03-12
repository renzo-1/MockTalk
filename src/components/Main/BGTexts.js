import React from "react";
import { Heading, Flex, useColorModeValue, Text } from "@chakra-ui/react";

const BGTexts = () => {
  const textColor = useColorModeValue("white", "#1a202c");

  return (
    <Flex
      className="fadeUp"
      direction={"column"}
      justify="center"
      align={"center"}
      flexWrap="nowrap"
    >
      <Heading
        fontSize={{ base: "3rem", sm: "6xl", md: "7xl", lg: "8xl" }}
        whiteSpace="nowrap"
        lineHeight="1"
        letterSpacing="0.09em"
        fontWeight="extrabold"
      >
        Mock Talk
      </Heading>
      <Heading
        fontSize={{ base: "3rem", sm: "6xl", md: "7xl", lg: "8xl" }}
        lineHeight="1"
        letterSpacing="0.09em"
        fontWeight="extrabold"
        opacity={0.8}
      >
        Mock Talk
      </Heading>
      <Heading
        fontSize={{ base: "3rem", sm: "6xl", md: "7xl", lg: "8xl" }}
        lineHeight="1"
        letterSpacing="0.09em"
        fontWeight="extrabold"
        opacity={0.6}
      >
        Mock Talk
      </Heading>

      <Heading
        fontSize={{ base: "3rem", sm: "6xl", md: "7xl", lg: "8xl" }}
        lineHeight="1"
        letterSpacing="0.09em"
        fontWeight="extrabold"
        opacity={0.4}
      >
        Mock Talk
      </Heading>

      <Heading
        fontSize={{ base: "3rem", sm: "6xl", md: "7xl", lg: "8xl" }}
        lineHeight="1"
        letterSpacing="0.09em"
        fontWeight="extrabold"
        opacity={0.2}
      >
        Mock Talk
      </Heading>
    </Flex>
  );
};

export default BGTexts;
