// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter", // Set your preferred font family
    h1: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "38px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
  },
});

export default theme;
