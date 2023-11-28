import React from "react";
import { Grid, Container, Flex } from "@chakra-ui/react";
import { BGTexts, Menu, BGBlurred } from "../components/Main";
import Floats from "../components/Floats";

function Main() {
  return (
    <>
      <Floats />
      <BGBlurred />
      <Container maxW="7xl" h="100%">
        <Grid placeItems="center" h="100%">
          <Flex
            columnGap={{ base: "4", lg: "20" }}
            rowGap={{ base: "4", md: 0 }}
            direction={{ base: "column", xl: "row" }}
            display="flex"
            justify="space-between"
            align="center"
            w="100%"
          >
            <BGTexts />
            <Menu />
          </Flex>
        </Grid>
      </Container>
    </>
  );
}

export default Main;
