"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "@/components/layout/Section";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Five years of shaping products across fintech, SaaS, and health"
    >
      <Stack spacing={0} sx={{ position: "relative" }}>
        {experiences.map((exp, index) => (
          <Box
            key={exp.id}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "200px 1fr" },
              gap: { xs: 1, md: 4 },
              pb: index < experiences.length - 1 ? 4 : 0,
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography
                variant="body2"
                color="primary.main"
                fontWeight={600}
                sx={{ pt: { md: 0.5 } }}
              >
                {exp.period}
              </Typography>
              {index < experiences.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    left: 95,
                    top: 28,
                    bottom: -16,
                    width: 2,
                    bgcolor: "divider",
                  }}
                />
              )}
            </Box>

            <Box
              sx={{
                pl: { md: 3 },
                borderLeft: { md: 2 },
                borderColor: { md: "divider" },
              }}
            >
              <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                {exp.role}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                {exp.company}
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {exp.bullets.map((bullet) => (
                  <Typography
                    key={bullet}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, mb: 0.5 }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Section>
  );
}
