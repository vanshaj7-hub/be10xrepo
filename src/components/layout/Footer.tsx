"use client";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SocialIconButton from "@/components/layout/SocialIconButton";
import { siteConfig, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={3}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {siteConfig.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {siteConfig.title} · {siteConfig.location}
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            {socialLinks.map((link) => (
              <SocialIconButton key={link.id} link={link} size="small" />
            ))}
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll to top"
              size="small"
              sx={{
                border: 1,
                borderColor: "divider",
              }}
            >
              <ArrowUpwardIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with care.
        </Typography>
      </Container>
    </Box>
  );
}
