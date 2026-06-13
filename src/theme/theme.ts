import { createTheme, type ThemeOptions } from "@mui/material/styles";
import { designTokens, netflixColors } from "./tokens";

const sharedTypography = {
  fontFamily: "var(--font-inter), sans-serif",
  h1: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  h3: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  h4: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 600,
  },
  h5: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 600,
  },
  h6: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    fontWeight: 600,
  },
  button: {
    textTransform: "none" as const,
    fontWeight: 700,
  },
};

function createAppTheme(mode: "light" | "dark") {
  const tokens = designTokens[mode];
  const isDark = mode === "dark";

  const options: ThemeOptions = {
    palette: {
      mode,
      primary: tokens.primary,
      secondary: tokens.secondary,
      background: tokens.background,
      text: tokens.text,
      divider: tokens.divider,
      action: {
        hover: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
        selected: isDark ? "rgba(229, 9, 20, 0.16)" : "rgba(229, 9, 20, 0.08)",
      },
    },
    typography: sharedTypography,
    shape: {
      borderRadius: tokens.borderRadius.button,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: tokens.borderRadius.button,
            boxShadow: "none",
            fontWeight: 700,
            "&:hover": {
              boxShadow: "none",
            },
          },
          containedPrimary: {
            backgroundColor: netflixColors.red,
            "&:hover": {
              backgroundColor: netflixColors.darkRed,
            },
          },
          outlinedPrimary: {
            borderColor: isDark ? netflixColors.silver : netflixColors.charcoal,
            color: tokens.text.primary,
            "&:hover": {
              borderColor: netflixColors.red,
              backgroundColor: isDark ? "rgba(229, 9, 20, 0.08)" : "rgba(229, 9, 20, 0.04)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: tokens.borderRadius.card,
            border: isDark ? "none" : `1px solid ${tokens.divider}`,
            backgroundImage: isDark
              ? "linear-gradient(149deg, rgba(25, 34, 71, 0.15) 0%, rgba(33, 14, 23, 0.2) 100%)"
              : "none",
            boxShadow: isDark ? "0 4px 24px rgba(0, 0, 0, 0.5)" : "0 2px 8px rgba(0, 0, 0, 0.06)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
          colorPrimary: {
            borderColor: netflixColors.red,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: tokens.borderRadius.card,
            backgroundColor: isDark ? netflixColors.graphite : tokens.background.paper,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: isDark ? netflixColors.slate : tokens.divider,
              },
              "&:hover fieldset": {
                borderColor: netflixColors.silver,
              },
              "&.Mui-focused fieldset": {
                borderColor: netflixColors.red,
              },
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            "&.Mui-checked": {
              color: netflixColors.red,
              "& + .MuiSwitch-track": {
                backgroundColor: netflixColors.red,
                opacity: 0.5,
              },
            },
          },
        },
      },
    },
  };

  return createTheme(options);
}

export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");

export function getTheme(mode: "light" | "dark") {
  return mode === "light" ? lightTheme : darkTheme;
}
