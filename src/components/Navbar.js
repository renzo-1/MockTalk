import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { usePageContext } from "../features/PageContext";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { currPage } = usePageContext();
  const { toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState();

  const capitalizedCurrPage =
    currPage.charAt(0).toUpperCase() + currPage.slice(1);

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
      px={{ base: "14", md: "20" }}
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
            {capitalizedCurrPage}
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
