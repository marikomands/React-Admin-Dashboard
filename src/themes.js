import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        primary: {
          100: "#e0e3e8",
          200: "#c1c7d1",
          300: "#a2acb9",
          400: "#8390a2",
          500: "#64748b",
          600: "#505d6f",
          700: "#3c4653",
          800: "#282e38",
          900: "#14171c",
        },

        tealAccent: {
          100: "#cff1e6",
          200: "#9fe3cd",
          300: "#70d5b3",
          400: "#40c79a",
          500: "#10b981",
          600: "#0d9467",
          700: "#0a6f4d",
          800: "#064a34",
          900: "#03251a",
        },
        redAccent: {
          100: "#fcdada",
          200: "#f9b4b4",
          300: "#f58f8f",
          400: "#f26969",
          500: "#ef4444",
          600: "#bf3636",
          700: "#8f2929",
          800: "#601b1b",
          900: "#300e0e",
        },
        blueAccent: {
          100: "#d8e6fd",
          200: "#b1cdfb",
          300: "#89b4fa",
          400: "#629bf8",
          500: "#3b82f6",
          600: "#2f68c5",
          700: "#234e94",
          800: "#183462",
          900: "#0c1a31",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },

        primary: {
          100: "#14171c",
          200: "#282e38",
          300: "#3c4653",
          400: "#505d6f",
          500: "#64748b",
          600: "#8390a2",
          700: "#a2acb9",
          800: "#c1c7d1",
          900: "#e0e3e8",
        },

        tealAccent: {
          100: "#03251a",
          200: "#064a34",
          300: "#0a6f4d",
          400: "#0d9467",
          500: "#10b981",
          600: "#40c79a",
          700: "#70d5b3",
          800: "#9fe3cd",
          900: "#cff1e6",
        },
        redAccent: {
          100: "#300e0e",
          200: "#601b1b",
          300: "#8f2929",
          400: "#bf3636",
          500: "#ef4444",
          600: "#f26969",
          700: "#f58f8f",
          800: "#f9b4b4",
          900: "#fcdada",
        },
        indigoAccent: {
          100: "#0c1a31",
          200: "#183462",
          300: "#234e94",
          400: "#2f68c5",
          500: "#3b82f6",
          600: "#629bf8",
          700: "#89b4fa",
          800: "#b1cdfb",
          900: "#d8e6fd",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: { main: colors.primary[500] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: { main: colors.primary[100] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };

  export const colorModeContext = createContext({ toggleColorMode: () => {} });

  export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() =>  ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
       }),[]);

  const theme = useMemo(() => createTheme(themesettings(mode)), [mode]);
  return [theme, colorMode]
  };
