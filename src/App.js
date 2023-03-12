import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./Theme";
import { Interview, Main } from "./pages";
import PageProvider from "./features/PageContext";
import Navbar from "./components/Navbar";
import Floats from "./components/Floats";
const App = () => {
  return (
    <PageProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/fundamentals" element={<Interview />} />
            <Route path="/technical" element={<Interview />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </PageProvider>
  );
};

export default App;
