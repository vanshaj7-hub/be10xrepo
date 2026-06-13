"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import WaveDivider from "@/components/layout/WaveDivider";
import ScrollHint from "@/components/layout/ScrollHint";
import HeroIllustration from "@/components/sections/HeroIllustration";
import { useReducedMotion, scrollToSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/data/portfolio";

const MotionBox = motion.create(Box);

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: "easeOut" as const },
        };

  return (
    <Box
      component="section"
      id="hero"
      aria-label="Introduction"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 4, md: 6 },
        pb: 0,
        scrollMarginTop: "80px",
        color: "text.primary",
        bgcolor: "background.default",
      }}
    >
      {/* Cinematic red glow — Netflix-style */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: -60,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(circle, rgba(229, 9, 20, 0.18) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(178, 7, 16, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", pb: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox {...fadeUp(0)}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    boxShadow: "0 2px 12px rgba(229, 9, 20, 0.2)",
                  }}
                >
                  <ShieldOutlinedIcon sx={{ color: "primary.main", fontSize: 28 }} />
                  <Typography
                    component="span"
                    sx={{
                      position: "absolute",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: "primary.main",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -35%)",
                    }}
                  >
                    {siteConfig.experienceYears}+
                  </Typography>
                </Box>
                <Chip
                  label={`${siteConfig.experienceYears}+ years experience`}
                  sx={{
                    fontWeight: 600,
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    height: 36,
                    "& .MuiChip-label": { px: 2 },
                  }}
                />
              </Stack>
            </MotionBox>

            <MotionBox {...fadeUp(0.08)}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.75rem", sm: "3.5rem", md: "3.75rem" },
                  lineHeight: 1.08,
                  mb: 1.5,
                  color: "text.primary",
                }}
              >
                {siteConfig.name}
              </Typography>
              <Typography
                variant="h2"
                component="p"
                sx={{
                  fontSize: { xs: "1.35rem", md: "1.5rem" },
                  fontWeight: 500,
                  color: "text.primary",
                  mb: 2.5,
                }}
              >
                {siteConfig.title}
              </Typography>
            </MotionBox>

            <MotionBox {...fadeUp(0.16)}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: 480,
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                {siteConfig.tagline}
              </Typography>
            </MotionBox>

            <MotionBox {...fadeUp(0.24)}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ sm: "center" }}>
                <MotionBox
                  whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={reducedMotion ? {} : { scale: 0.98 }}
                  sx={{ display: "inline-flex" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => scrollToSection("#projects")}
                    sx={{
                      px: 3,
                      py: 1.25,
                      boxShadow: "0 4px 16px rgba(229, 9, 20, 0.35)",
                      "&:hover": {
                        boxShadow: "0 6px 24px rgba(229, 9, 20, 0.45)",
                      },
                    }}
                  >
                    View Work
                  </Button>
                </MotionBox>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("#contact")}
                  sx={{
                    px: 3,
                    py: 1.25,
                    borderRadius: 3,
                    borderWidth: 1.5,
                    borderColor: "divider",
                    color: "text.primary",
                    bgcolor: "background.paper",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "background.paper",
                    },
                  }}
                >
                  Get in Touch
                </Button>

                <Button
                  variant="text"
                  size="large"
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    "&:hover": { color: "primary.main", bgcolor: "transparent" },
                  }}
                >
                  Resume
                </Button>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              {...(reducedMotion
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const },
                  })}
            >
              <HeroIllustration />
            </MotionBox>
          </Grid>
        </Grid>

        <ScrollHint />
      </Container>

      <Box sx={{ color: "background.paper" }}>
        <WaveDivider />
      </Box>
    </Box>
  );
}
