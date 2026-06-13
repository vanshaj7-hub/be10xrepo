/**
 * Netflix-inspired brand palette
 * @see https://colorcode.tools/brands/netflix
 * @see https://styles.refero.design/style/32959012-f50d-4465-bb01-2aa4d506e0a8
 */
export const netflixColors = {
  red: "#E50914",
  darkRed: "#B20710",
  deepSpace: "#141414",
  black: "#000000",
  graphite: "#2D2D2D",
  charcoal: "#414141",
  slate: "#5A5A5A",
  ash: "#808080",
  silver: "#B3B3B3",
  white: "#FFFFFF",
  lightBg: "#F5F5F5",
  lightPaper: "#FFFFFF",
  lightMuted: "#E5E5E5",
} as const;

export const designTokens = {
  light: {
    background: {
      default: netflixColors.lightBg,
      paper: netflixColors.lightPaper,
    },
    text: {
      primary: netflixColors.deepSpace,
      secondary: netflixColors.slate,
    },
    primary: {
      main: netflixColors.red,
      light: "#F40612",
      dark: netflixColors.darkRed,
      contrastText: netflixColors.white,
    },
    secondary: {
      main: netflixColors.charcoal,
      contrastText: netflixColors.white,
    },
    divider: netflixColors.lightMuted,
    borderRadius: {
      card: 4,
      button: 4,
    },
  },
  dark: {
    background: {
      default: netflixColors.deepSpace,
      paper: netflixColors.graphite,
    },
    text: {
      primary: netflixColors.white,
      secondary: netflixColors.silver,
    },
    primary: {
      main: netflixColors.red,
      light: "#F40612",
      dark: netflixColors.darkRed,
      contrastText: netflixColors.white,
    },
    secondary: {
      main: netflixColors.charcoal,
      contrastText: netflixColors.white,
    },
    divider: netflixColors.charcoal,
    borderRadius: {
      card: 4,
      button: 4,
    },
  },
} as const;

export type ColorMode = "light" | "dark";

export const STORAGE_KEY = "portfolio-color-mode";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
