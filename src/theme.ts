import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  colors: {
    primary: "#202124",
    secondary: "#5f6368",
    text: "#e8eaed",
    green: "#345920",
    blue: "#1e3a5f",
    red: "#5c2b29",
    grey: "#3c3f43",
    yellow: "#635d19",
  },
  sizes: {
    ticket: {
      w: "240px",
      h: "340px",
      ts: "5",
      ps: ".875rem",
    },
  },
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Raleway, sans-serif",
  },
  fontSizes: {
    md: "0.875rem",
  },
});
