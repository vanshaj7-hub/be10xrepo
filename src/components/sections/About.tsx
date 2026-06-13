"use client";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { useReducedMotion } from "@/hooks/useActiveSection";
import { aboutContent, siteConfig } from "@/data/portfolio";

const MotionBox = motion.create(Box);

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="about" title="About" subtitle={aboutContent.subtitle}>
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <MotionBox
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: -24 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: "-80px" },
                  transition: { duration: 0.6, ease: "easeOut" as const },
                })}
          >
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 4,
                overflow: "hidden",
                maxWidth: 400,
                mx: { xs: "auto", md: 0 },
                border: 1,
                borderColor: "divider",
                boxShadow: "0 12px 40px rgba(26, 26, 46, 0.08)",
                "&:hover img": {
                  transform: reducedMotion ? "none" : "scale(1.03)",
                },
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                priority
              />
            </Box>
          </MotionBox>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <MotionBox
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: 24 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: "-80px" },
                  transition: { duration: 0.6, delay: 0.1, ease: "easeOut" as const },
                })}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 3, fontSize: "1.05rem" }}
            >
              {aboutContent.bio}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.85,
                mb: 4,
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "text.primary",
                borderLeft: 3,
                borderColor: "primary.main",
                pl: 2.5,
                py: 0.5,
              }}
            >
              {aboutContent.philosophy}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<DownloadOutlinedIcon />}
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 3,
                borderWidth: 1.5,
                px: 3,
                "&:hover": { borderWidth: 1.5 },
              }}
            >
              Download Resume
            </Button>
          </MotionBox>
        </Grid>
      </Grid>
    </Section>
  );
}
