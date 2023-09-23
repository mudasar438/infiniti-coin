import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme1 = createTheme({
  palette: {
    background: {
      default: "#1E1E1E",
      color: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.60)",
    },
    primary: {
      main: "#58C5DA",
    },
  },
  typography: {
    fontFamily: ["Satoshi, sans-serif", "'Roboto', sans-serif"].join(","),
    h1: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "54px",
      fontWeight: "900",
    },
    h2: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "40px",
      fontWeight: "700",
    },
    h3: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "32px",
      fontWeight: "700",
    },
    h4: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "22px",
    },

    body: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "16px",
    },
    body1: {
      fontFamily: "Satoshi, sans-serif",
    },
    body2: {
      fontFamily: "Satoshi, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#D6D6D6",
    },
    subtitle: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
    },
    gray: {
      fontFamily: "Satoshi, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(255, 255, 255, 0.60)",
      fontSize: "16px",
    },
    geryBold: {
      fontFamily: "Satoshi, sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      color: "#D6D6D6",
      fontSize: "14px",
    },
  },
});

theme1.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#080A0B",
        color: "#fff",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

const theme = responsiveFontSizes(theme1);

export default theme;
