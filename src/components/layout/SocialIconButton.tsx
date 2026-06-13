"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PaletteIcon from "@mui/icons-material/Palette";
import BrushIcon from "@mui/icons-material/Brush";
import IconButton from "@mui/material/IconButton";
import type { SocialLink } from "@/data/portfolio";

const iconMap = {
  linkedin: LinkedInIcon,
  behance: PaletteIcon,
  dribbble: BrushIcon,
  email: EmailIcon,
};

type SocialIconButtonProps = {
  link: SocialLink;
  size?: "small" | "medium";
};

export default function SocialIconButton({ link, size = "medium" }: SocialIconButtonProps) {
  const Icon = iconMap[link.icon];

  return (
    <IconButton
      component="a"
      href={link.href}
      target={link.icon === "email" ? undefined : "_blank"}
      rel={link.icon === "email" ? undefined : "noopener noreferrer"}
      aria-label={link.label}
      size={size}
      sx={{
        color: "text.secondary",
        transition: "color 0.2s ease, transform 0.2s ease",
        "&:hover": {
          color: "primary.main",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Icon fontSize={size === "small" ? "small" : "medium"} />
    </IconButton>
  );
}
