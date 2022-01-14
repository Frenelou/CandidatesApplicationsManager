import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./routes/Dashboard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" p={10}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </Box>
  </ChakraProvider>
);
