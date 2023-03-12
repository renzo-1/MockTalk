import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Questions = ({ randomQuestions, setAnswers, isDone, setIsDone }) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  const [questionCount, setQuestionCount] = useState(0);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    if (!isDone) {
      // (1) record on first load. (2) start recording again after click of next
      startRecording();
      // save blob url to answers
    }
    setAnswers((prevAnswers) => [...prevAnswers, mediaBlobUrl]);
  }, [mediaBlobUrl]);

  const handleNext = (e) => {
    // stop recording on next
    stopRecording();
    // move to the next questions
    setQuestionCount((prevCount) => prevCount + 1);
    // start animation
    setAnimateCard(true);
  };

  const handleDone = (e) => {
    setIsDone(true);
    stopRecording();
  };
  if (isDone) {
    return <></>;
  }
  return (
    <Flex className={"fadeUp"} w="100%" direction="column">
      <Flex align="center" alignSelf="center" maxW="4xl" mb="5">
        <Text mr="2">{status}</Text>
        <Box h="8px" w="8px" bg="red" borderRadius="100%"></Box>
      </Flex>

      {randomQuestions && (
        <>
          <Box
            as="audio"
            alt="audio recording"
            src={randomQuestions[questionCount].audio}
            controls
            autoPlay
            opacity={0}
            display="none"
          />
          <Grid
            placeItems="center"
            gridTemplateRows="3fr 1fr"
            alignSelf="center"
            onAnimationEnd={() => setAnimateCard(false)}
            className={animateCard ? "fadeUp" : ""}
            h="200px"
            px="10"
            textAlign="center"
            boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
            borderRadius="5px"
            w="100%"
            maxW="4xl"
          >
            <GridItem placeContent="center">
              <Heading>{randomQuestions[questionCount].question}</Heading>
            </GridItem>
            <GridItem>
              <Flex gap="2">
                <Box
                  w="5"
                  h="2"
                  transform="skewX(-40deg)"
                  bg={questionCount >= 0 ? "primaryGreen" : "gray.300"}
                ></Box>
                <Box
                  w="5"
                  h="2"
                  transform="skewX(-40deg)"
                  bg={questionCount >= 1 ? "primaryGreen" : "gray.300"}
                ></Box>
                <Box
                  w="5"
                  h="2"
                  transform="skewX(-40deg)"
                  bg={questionCount >= 2 ? "primaryGreen" : "gray.300"}
                ></Box>
                <Box
                  w="5"
                  h="2"
                  transform="skewX(-40deg)"
                  bg={questionCount >= 3 ? "primaryGreen" : "gray.300"}
                ></Box>
                <Box
                  w="5"
                  h="2"
                  transform="skewX(-40deg)"
                  bg={questionCount >= 4 ? "primaryGreen" : "gray.300"}
                ></Box>
              </Flex>
            </GridItem>
          </Grid>
        </>
      )}
      {questionCount === 4 ? (
        <Button
          alignSelf="center"
          w="20"
          bg="primaryGreen"
          color="white"
          onClick={handleDone}
          mt="20"
        >
          Done
        </Button>
      ) : (
        <Button
          alignSelf="center"
          p={{ base: "4", lg: "6" }}
          fontSize={{ base: "lg", lg: "2xl" }}
          bg="primaryGreen"
          color="white"
          onClick={handleNext}
          mt="20"
        >
          Next
        </Button>
      )}
    </Flex>
  );
};

export default Questions;
