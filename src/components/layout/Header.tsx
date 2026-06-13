"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { useActiveSection, scrollToSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/data/portfolio";
import { navLinks } from "@/theme/tokens";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  const navContent = (
    <List component="nav" aria-label="Main navigation" sx={{ px: 1 }}>
      {navLinks.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <ListItemButton
            key={link.href}
            onClick={() => handleNavClick(link.href)}
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

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          color: "text.primary",
          backdropFilter: "blur(16px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(245, 245, 245, 0.88)"
              : "rgba(20, 20, 20, 0.92)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <Typography
              component="button"
              variant="h6"
              onClick={() => handleNavClick("#hero")}
              sx={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                background: "none",
                color: "inherit",
                fontSize: "1.05rem",
                flexShrink: 0,
              }}
            >
              {siteConfig.name}
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: 0.5,
              }}
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <Box key={link.href} sx={{ position: "relative", px: 1.5, py: 1 }}>
                    <Typography
                      component="button"
                      onClick={() => handleNavClick(link.href)}
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

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
              <ThemeToggle />
              <Avatar
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                sx={{
                  width: 36,
                  height: 36,
                  border: 2,
                  borderColor: "divider",
                  display: { xs: "none", sm: "flex" },
                }}
              />
              <IconButton
                sx={{ display: { md: "none" } }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 280, pt: 2 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 1 }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
            <CloseIcon />
          </IconButton>
        </Box>
        {navContent}
      </Drawer>
    </>
  );
}
