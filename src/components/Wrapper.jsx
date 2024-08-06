import { Alert, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Wrapper({ children, isLoading, isError }) {
  return isLoading ? (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  ) : isError ? (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Alert severity="error">Something went wrong</Alert>
    </Box>
  ) : (
    children
  );
}

export default Wrapper;
