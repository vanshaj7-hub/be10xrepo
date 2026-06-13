"use client";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { cardHoverShadow } from "@/theme/sx";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card sx={{ height: "100%", ...cardHoverShadow({ intensity: "md", lift: 6 }) }}>
      <CardActionArea
        onClick={onClick}
        sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
        aria-label={`View case study: ${project.title}`}
      >
        <Box sx={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
            <Typography variant="overline" color="text.secondary">
              {project.role}
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: 18, color: "text.secondary" }} />
          </Stack>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            {project.summary}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
