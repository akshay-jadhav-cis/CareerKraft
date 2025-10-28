import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // CareerKraft Blue
    },
    secondary: {
      main: "#ff7b00", // Accent orange
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#222222",
      secondary: "#5f6368",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h4: {
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#565656",
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
