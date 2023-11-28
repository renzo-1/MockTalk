import React, { useRef, useEffect } from "react";
import { Heading, Stack, Link, Card, Text } from "@chakra-ui/react";
import { usePageContext } from "../../features/PageContext";
import { Link as ReactRouterLink } from "react-router-dom";

const Menu = () => {
  const { setCurrPage } = usePageContext();

  return (
    <Stack spacing="8" zIndex="20">
      <Link
        onClick={(e) => setCurrPage("fundamentals")}
        as={ReactRouterLink}
        to="/fundamentals"
        _hover={{ textDecoration: "none" }}
      >
        <Card
          borderLeft="8px solid #5BAB35"
          px="7"
          py="14"
          display="flex"
          direction="column"
          justify="center"
          className="fadeUp"
          height={{ base: "100px", md: "150px" }}
          boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
        >
          <Heading
            color="primaryGreen"
            fontSize={{ base: "xl", md: "base", lg: "2xl" }}
            pb="2"
          >
            Fundamentals
          </Heading>
          <Text fontSize={{ base: "xs", lg: "lg" }}>
            Test your ability to answer common interview questions.
          </Text>
        </Card>
      </Link>
      <Link
        onClick={(e) => setCurrPage("technical")}
        to="/technical"
        _hover={{ textDecoration: "none" }}
        as={ReactRouterLink}
      >
        <Card
          borderLeft="8px solid #5BAB35"
          px="7"
          py="14"
          display="flex"
          direction="column"
          justify="center"
          className="fadeUp"
          height={{ base: "100px", md: "150px" }}
          boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
        >
          <Heading
            pb="2"
            color="primaryGreen"
            fontSize={{ base: "xl", lg: "2xl" }}
          >
            Technical
          </Heading>
          <Text fontSize={{ base: "xs", md: "base", lg: "lg" }}>
            Prepare yourself for technical questions about coding and
            technologies.
          </Text>
        </Card>
      </Link>
    </Stack>
  );
};

export default Menu;
