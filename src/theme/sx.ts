import { alpha, type Theme } from "@mui/material/styles";
import { netflixColors } from "./tokens";

export const scrollMarginTop = "80px";

export function brandAlpha(opacity: number): string {
  return alpha(netflixColors.red, opacity);
}

export function brandGlow(intensity: "sm" | "md" | "lg"): string {
  const opacity = intensity === "sm" ? 0.14 : intensity === "md" ? 0.18 : 0.25;
  return `radial-gradient(circle, ${brandAlpha(opacity)} 0%, transparent 70%)`;
}

export function brandShadow(intensity: "sm" | "md" | "lg"): string {
  const opacity = intensity === "sm" ? 0.2 : intensity === "md" ? 0.35 : 0.45;
  return `0 4px 16px ${brandAlpha(opacity)}`;
}

export function brandShadowHover(intensity: "sm" | "md" | "lg"): string {
  const opacity = intensity === "sm" ? 0.28 : intensity === "md" ? 0.45 : 0.55;
  return `0 6px 24px ${brandAlpha(opacity)}`;
}

export function cardHoverShadow(options: { intensity: "sm" | "md"; lift?: number }) {
  const { intensity, lift = 4 } = options;
  const blur = intensity === "sm" ? 8 : 12;
  const spread = intensity === "sm" ? 28 : 36;
  const opacity = intensity === "sm" ? 0.14 : 0.17;

  return {
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: `translateY(-${lift}px)`,
      boxShadow: `0 ${blur}px ${spread}px ${brandAlpha(opacity)}`,
    },
  };
}

export function headerBackdrop(theme: Theme): string {
  return theme.palette.mode === "light"
    ? alpha(netflixColors.lightBg, 0.88)
    : alpha(netflixColors.deepSpace, 0.92);
}
