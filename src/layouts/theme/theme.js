import { createTheme } from "@mui/material/styles";

export const blue = {
  50: "#e8f3ff",
  100: "#d2e8fe",
  200: "#a5d2ff",
  300: "#6fb7ff",
  400: "#1e8eff",
  500: "#0078f0",
  600: "#0063c3",
  700: "#004b96",
  800: "#003469",
  // 900: "#1E2156",
  900: "#001E3C",
};

// NOTE create custom theme
export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir,roboto",
  },
  palette: {
    mode: "light",
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[900],
    },
    secondary: {
      main: "#A31ACB",
    },
    error: {
      main: "#ff5555",
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir,roboto",
  },
  palette: {
    mode: "dark",
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[900],
    },
    secondary: {
      main: "#A31ACB",
    },
    error: {
      main: "#ff5555",
    },
  },
});
