import React from "react";
import { ThemeProvider as Provider } from "@mui/material/styles";
import theme from "./theme";

function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}

export default ThemeProvider;
