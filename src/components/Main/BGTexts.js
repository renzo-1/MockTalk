import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

const BGTexts = () => {

  return (
    <Flex
      className="fadeUp"
      direction={"column"}
      justify="center"
      align={"center"}
      flexWrap="nowrap"
      my={{ base: "4rem" }}
    >
      {new Array(5).fill("MOCK TALK").map((element, index) => {
        return (
          <Heading
            key={index}
            fontSize={{ base: "2.5rem", md: "4xl", lg: "5xl", xl: "8xl" }}
            whiteSpace="nowrap"
            lineHeight="1.2"
            letterSpacing="0.1em"
            fontWeight="extrabold"
            opacity={index > 0 && 1 - ((index + 1) / 100) * 10}
          >
            {element}
          </Heading>
        );
      })}
    </Flex>
  );
};

export default BGTexts;
