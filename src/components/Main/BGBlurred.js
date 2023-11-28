import React from "react";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
const gradientDiv = {
  position: "absolute",
  rounded: "50%",
  // opacity: "0.3",
};
const BGBlurred = () => {
  const opacityMode = useColorModeValue("0.3", "0.2");
  return (
    <>
      <Box position="absolute" h="100%" w="100%" overflowY="hidden" zIndex={-1}>
        <Box
          opacity={opacityMode}
          sx={gradientDiv}
          top="0"
          left="10%"
          w={{ base: "xs", lg: "lg", lg: "4xl" }}
          h={{ base: "xs", lg: "xl", lg: "2xl" }}
          bgGradient="
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        "
        ></Box>
        <Box
          sx={gradientDiv}
          opacity={opacityMode}
          top={{ base: "70%", lg: "40%" }}
          left={{ base: "30%", lg: "50%" }}
          w={{ base: "xs", md: "lg", lg: "4xl" }}
          h={{ base: "xs", md: "xl", lg: "lg" }}
          bgGradient="
        background-color: #FBDA61;
      background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        "
        ></Box>
      </Box>

      <Box
        backdropFilter="auto"
        backdropBlur="100px"
        minH="700px"
        position="absolute"
        h="100%"
        w="100%"
        zIndex={-1}
      ></Box>
    </>
  );
};

export default BGBlurred;
