import React from "react";
import { Grid, Text, Box, Card, useColorModeValue } from "@chakra-ui/react";

const DisplayAnswers = ({ answers, questions }) => {
  const textColor = useColorModeValue("black", "black");

  return answers.map((url, i) => {
    // there is bug where an empty auido is inserted on the first element
    if (i != 0) {
      return (
        <Grid key={i} w="100%" gridTemplateColumns="1fr">
          <Card
            display="Flex"
            mb="5"
            direction="column"
            w="100%"
            bg="white"
            boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
            borderRadius="10px"
            p="5"
          >
            <Text color={textColor}>
              <span>{i}. </span>
              {questions[i - 1].question}
            </Text>
            <Box w="100%" h="8" mt="2" as="audio" src={url} controls />
          </Card>
        </Grid>
      );
    }
  });
};

export default DisplayAnswers;
