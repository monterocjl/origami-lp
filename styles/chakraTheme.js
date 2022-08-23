import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F7F9F7",
      200: "#e0f0e5",
      300: "#9ddeb3",
      400: "#107456",
      500: "#082a20",
    },
  },
  styles: {
    global: {
      body: {
        color: "brand.500",
      },
    },
  },
});

export default theme;
