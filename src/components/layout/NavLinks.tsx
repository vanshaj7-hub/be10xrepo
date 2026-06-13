"use client";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { navLinks } from "@/theme/tokens";

type NavLinksProps = {
  variant: "desktop" | "mobile";
  activeSection: string;
  onNavigate: (href: string) => void;
};

export default function NavLinks({ variant, activeSection, onNavigate }: NavLinksProps) {
  if (variant === "mobile") {
    return (
      <List component="nav" aria-label="Main navigation" sx={{ px: 1 }}>
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <ListItemButton
              key={link.href}
              onClick={() => onNavigate(link.href)}
              selected={isActive}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  bgcolor: "action.selected",
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          );
        })}
      </List>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
      {navLinks.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <Box key={link.href} sx={{ position: "relative", px: 1.5, py: 1 }}>
            <Typography
              component="button"
              onClick={() => onNavigate(link.href)}
              sx={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "primary.main" : "text.secondary",
                transition: "color 0.2s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </Typography>
            {isActive && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60%",
                  height: 2,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
