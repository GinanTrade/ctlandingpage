import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    CtColorScheme: {
      primary: string;
      secondary: string;
      neonLogo: string;
      neon200: string;
      neon300: string;
      neon400: string;
      neon500: string;
      blue800: string;
      yellow500: string;
      white: string;
      grey100: string;
      grey300: string;
      grey400: string;
      black800: string;
      black900: string;
      pink300: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    CtColorScheme: {
      primary: string;
      secondary: string;
      neonLogo: string;
      neon200: string;
      neon300: string;
      neon400: string;
      neon500: string;
      blue800: string;
      yellow500: string;
      white: string;
      grey100: string;
      grey300: string;
      grey400: string;
      black800: string;
      black900: string;
      pink300: string;
    };
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        disableElevation: true,
        root: {
          borderRadius: 0,
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    CtColorScheme: {
      primary: "#77FBDE",
      secondary: "#001689",
      neonLogo: "#77FBDE",
      neon200: "#16FFDD",
      neon300: "#00E6C5",
      neon400: "#00DEBE",
      neon500: "#00C9AB",
      blue800: "#001689",
      yellow500: "#FFDF08",
      white: "#FFFFFF",
      grey100: "#E2E6E0",
      grey300: "#C8C8C8",
      grey400: "#87888B",
      black800: "#1A1A1a",
      black900: "#00000A",
      pink300: "#FA25A8",
    },
    primary: {
      main: "#77FBDE",
    },
    secondary: {
      main: "#001689",
    },
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: {
      fontSize: "5.3rem",
      fontWeight: 600,
      color: "#1A1A1a",
      "@media (max-width: 1050px)": {
        fontSize: "3rem", // Adjust font size for mobile
      },
    },
    h2: {
      fontSize: "5rem",
      fontWeight: 600,
      color: "#1A1A1a",
      "@media (max-width: 1050px)": {
        fontSize: "3.75rem", // Adjust font size for mobile
      },
    },
    h3: {
      fontSize: "3.25rem",
      fontWeight: 600,
      color: "#1A1A1a",
      "@media (max-width: 1050px)": {
        fontSize: "2.3rem", // Adjust font size for mobile
      },
    },
    h4: {
      fontSize: "2.25rem",
      fontWeight: 600,
      color: "#1A1A1a",
      "@media (max-width: 1050px)": {
        fontSize: "1.6rem", // Adjust font size for mobile
      },
    },
    h5: {
      fontSize: "2rem",
      color: "#1A1A1A",
      fontWeight: 600,
      "@media (max-width: 1050px)": {
        fontSize: "1.5rem", // Adjust font size for mobile
      },
    },
    h6: {
      fontSize: "1.25rem",
      color: "#1A1A1A",
    },
    subtitle1: {
      fontSize: "0.938rem",
      color: "#1A1A1A",
    },
    subtitle2: {
      fontSize: "0.875rem",
      color: "#1A1A1A",
    },
    body1: {
      //Paragrapgh
      fontSize: "1rem",
      color: "#1A1A1A",
      fontWeight: 500,
      // fontWeight: 600,
    },
    body2: {
      //Display 2
      fontSize: "4rem",
      color: "#1A1A1A",
      fontWeight: 600,
      "@media (max-width: 1050px)": {
        fontSize: "2.125rem", // Adjust font size for mobile
        color: "#1A1A1A",
        fontWeight: 600,
      },
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      "@media (max-width: 1050px)": {
        fontSize: "1rem", // Adjust font size for mobile
      },
    },
  },
});

export default theme;
