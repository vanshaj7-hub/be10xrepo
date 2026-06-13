"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Section from "@/components/layout/Section";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A toolkit built for discovery, design, and delivery"
    >
      <Grid container spacing={3}>
        {skillCategories.map((category) => (
          <Grid key={category.id} size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 8px 24px rgba(229, 9, 20, 0.12)"
                      : "0 8px 32px rgba(229, 9, 20, 0.15)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                  {category.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{ fontWeight: 500 }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
