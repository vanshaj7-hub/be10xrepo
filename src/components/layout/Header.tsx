"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import NavLinks from "@/components/layout/NavLinks";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/scroll";
import { headerBackdrop } from "@/theme/sx";
import { navLinks } from "@/theme/tokens";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          color: "text.primary",
          backdropFilter: "blur(16px)",
          backgroundColor: headerBackdrop,
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

            <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1 }}>
              <NavLinks
                variant="desktop"
                activeSection={activeSection}
                onNavigate={handleNavClick}
              />
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
        <NavLinks
          variant="mobile"
          activeSection={activeSection}
          onNavigate={handleNavClick}
        />
      </Drawer>
    </>
  );
}
