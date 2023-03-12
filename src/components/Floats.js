import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import talking from "../assets/TalkingSticker.svg";
const Floats = () => {
  const gradient = useColorModeValue(
    "linear-gradient(180deg, rgba(45,253,135,1) 34%, rgba(45,253,143,1) 66%, rgba(75,236,202,1) 100%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(56,147,58,1) 24%, rgba(119,214,119,1) 48%, rgba(78,147,78,1) 78%, rgba(23,57,23,1) 100%);"
  );
  return (
    <Box
      w="100%"
      h="100%"
      position="absolute"
      opacity="1"
      blur="10px"
      top="0"
      zIndex="10"
      // bgImage={bg}
      // bgGradient={gradient}
      className="rotateHue"
    >
      <Image
        src={talking}
        filter="drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3))"
        w={{ base: "120px", lg: "250px" }}
        position="absolute"
        left="7%"
        top="15%"
        zIndex={10}
      ></Image>
      <Image
        src={talking}
        filter="drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3))"
        w={{ base: "150px", lg: "200px" }}
        position="absolute"
        left={{ base: "25%", lg: "30%" }}
        top={{ base: "35%", lg: "80%" }}
        transform="rotate(-50deg)"
      ></Image>
      <Image
        src={talking}
        filter="drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3))"
        w={{ base: "120px", lg: "150px" }}
        position="absolute"
        left={{ base: "50%", lg: "60%" }}
        top="23%"
        transform="scaleX(-1) scaleY(1)"
      ></Image>
    </Box>
  );
};

export default Floats;
