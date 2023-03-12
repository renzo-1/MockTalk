import React from "react";
import {
  Card,
  Grid,
  CardBody,
  CardHeader,
  Container,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { BGTexts } from "../components/Main";
import { Link } from "react-router-dom";
import { usePageContext } from "../features/PageContext";
import Navbar from "../components/Navbar";
import Floats from "../components/Floats";
function Main() {
  // const bgColor = useColorModeValue("#fff", "#000");
  const { setCurrPage } = usePageContext();

  return (
    <>
      <Floats />
      <Container maxW="7xl" h="100%" py={"10"} overflowX="hidden">
        <Grid placeItems="center" h="100%">
          <Flex
            gap={{ base: "4", lg: "20" }}
            direction={{ base: "column", xl: "row" }}
            display="flex"
            justify="space-between"
            align="center"
            w="100%"
          >
            <BGTexts />
            <Stack spacing="8" zIndex="20">
              <Link
                onClick={(e) => setCurrPage("Fundamentals")}
                to="/fundamentals"
              >
                <Card
                  borderLeft="10px solid #5BAB35"
                  px="7"
                  display="flex"
                  direction="column"
                  justify="center"
                  className="fadeUp"
                  minHeight="150px"
                  boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
                  w="100%"
                  minW="min-content"
                >
                  <Heading
                    color="primaryGreen"
                    fontSize={{ base: "xl", lg: "3xl" }}
                    pt="5"
                    pb="3"
                  >
                    Fundamentals
                  </Heading>
                  <Text pb="7" fontSize={{ lg: "lg" }}>
                    Test your ability to answer common interview questions.
                  </Text>
                </Card>
              </Link>
              <Link onClick={(e) => setCurrPage("Technical")} to="/technical">
                <Card
                  borderLeft="10px solid #5BAB35"
                  px="7"
                  display="flex"
                  direction="column"
                  justify="center"
                  className="fadeUp"
                  minHeight="150px"
                  boxShadow="0 2px 8px 0 rgba(0,0,0,0.2)"
                >
                  <Heading
                    color="primaryGreen"
                    fontSize={{ base: "xl", lg: "3xl" }}
                    pt="5"
                    pb="3"
                  >
                    Technical
                  </Heading>
                  <Text pb="7" fontSize={{ lg: "lg" }}>
                    Prepare yourself for technical questions about coding and
                    technologies.
                  </Text>
                </Card>
              </Link>
            </Stack>
          </Flex>
        </Grid>
      </Container>
    </>
  );
}

export default Main;
