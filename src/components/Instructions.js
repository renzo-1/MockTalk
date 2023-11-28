import React from "react";
import { Heading, ListItem, UnorderedList, Box, Grid } from "@chakra-ui/react";
const Instructions = ({ title, type }) => {
  return (
    <Grid className="fadeUp" h="200px" w="100%" placeItems="center">
      <Heading
        mb={{ base: "5", lg: "7" }}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        {title}
      </Heading>
      <UnorderedList
        pl="10"
        spacing={{ base: "2", lg: "4" }}
      >
        <ListItem fontSize={{ base: "lg", md: "xl" }}>
          You’ll be getting 5 random questions.{" "}
        </ListItem>
        <ListItem fontSize={{ base: "lg", md: "xl" }}>
          This is not a timed interview, relax.
        </ListItem>
        <ListItem fontSize={{ base: "lg", md: "xl" }}>
          You can play your answers after answering the questions.
        </ListItem>
        <ListItem fontSize={{ base: "lg", md: "xl" }}>
          Click start when you are ready.
        </ListItem>
      </UnorderedList>
    </Grid>
  );
};

export default Instructions;
