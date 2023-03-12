import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import Instructions from "../components/Instructions";
import Questions from "../components/Questions";
import { RandomPicker, QuestionsBank } from "../helpers";
import { usePageContext } from "../features/PageContext";
import DisplayAnswers from "../components/DisplayAnswers";

const Interview = () => {
  const { currPage } = usePageContext();
  const [isStart, setIsStart] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isShowQuestion, setIsShowQuestion] = useState(false);

  const handleStart = () => {
    if (currPage === "Fundamentals") {
      setRandomQuestions(RandomPicker(QuestionsBank.fundamentals, 5));
    } else {
      setRandomQuestions(RandomPicker(QuestionsBank.technical, 5));
    }

    setIsStart(true);
    setTimeout(() => {
      setIsShowQuestion(true);
    }, 2000);
  };

  const handleTryAgain = (e) => {
    setIsStart(false);
    setIsDone(false);
    setAnswers([]);
  };

  const beforeStart = () => {
    return (
      <Stack spacing={{ base: "40" }}>
        <Instructions
          title={
            currPage === "Fundamentals"
              ? "Fundmentals Interview"
              : "Technical Interview"
          }
        />
        <Button
          bg="primaryGreen"
          color="white"
          alignSelf="center"
          p={{ base: "4", lg: "6" }}
          fontSize={{ base: "lg", lg: "2xl" }}
          onClick={handleStart}
        >
          Start
        </Button>
      </Stack>
    );
  };

  const afterStart = (e) => {
    // show "good luck" text then transition to questions using interval
    return isShowQuestion ? (
      <Questions
        randomQuestions={randomQuestions}
        setAnswers={setAnswers}
        setIsDone={setIsDone}
        isDone={isDone}
      />
    ) : (
      <Text className="fadeUp" textAlign="center" fontSize="3xl">
        Good Luck!
      </Text>
    );
  };

  return (
    <Container maxW="7xl" py={"10"} w="100%" h="100%">
      <Grid
        h="100%"
        w="100%"
        placeItems="center"
        placeContent="center"
        gridTemplateColumns="1fr"
      >
        {isStart ? afterStart() : beforeStart()}
        {isDone && (
          <>
            <Heading>Good Work!</Heading>
            <Text textAlign="center" mb="8">
              Play your recorded answers and assess yourself
            </Text>
            <DisplayAnswers answers={answers} questions={randomQuestions} />
            <Button
              onClick={handleTryAgain}
              color="white"
              mt="8"
              bg="primaryGreen"
              alignSelf="center"
              p={{ base: "4", lg: "6" }}
              fontSize={{ base: "lg", lg: "2xl" }}
            >
              Try Again
            </Button>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Interview;
