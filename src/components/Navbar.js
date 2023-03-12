import React, { useState, useEffect, useLayoutEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Switch,
  Flex,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { usePageContext } from "../features/PageContext";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { currPage } = usePageContext();
  const { toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    if (localStorage.getItem("chakra-ui-color-mode") === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);
  return (
    <Flex
      maxW="7xl"
      w="100%"
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
      display="flex"
      justify="space-between"
      py="8"
      px={{ base: "5" }}
      zIndex="1000"
    >
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Mock Talk</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="/fundamentals"
            color="primaryGreen"
            fontWeight="bold"
          >
            {currPage && currPage}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {isDarkMode ? (
        <SunIcon
          cursor="pointer"
          boxSize="6"
          onClick={(e) => {
            setIsDarkMode(false);
            toggleColorMode();
          }}
        />
      ) : (
        <MoonIcon
          cursor="pointer"
          boxSize="6"
          onClick={(e) => {
            setIsDarkMode(true);
            toggleColorMode();
          }}
        />
      )}
    </Flex>
  );
};

export default Navbar;
