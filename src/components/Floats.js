import { Box, Image } from "@chakra-ui/react";
import React from "react";
import talking from "../assets/TalkingSticker.svg";
const Floats = () => {
 
  return (
    <Box
      w="100%"
      h="100%"
      minH="600px"
      position="absolute"
      opacity="1"
      blur="10px"
      top="0"
      zIndex="10"
      overflowY="hidden"
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
