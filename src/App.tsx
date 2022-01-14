import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./routes/Dashboard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" p={10}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);
