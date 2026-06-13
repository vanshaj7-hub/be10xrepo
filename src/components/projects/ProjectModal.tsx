"use client";

import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      aria-labelledby="project-modal-title"
    >
      <DialogTitle
        id="project-modal-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
          pr: 1,
        }}
      >
        <Box>
          <Typography variant="overline" color="text.secondary">
            {project.role} · {project.timeline}
          </Typography>
          <Typography variant="h5" component="span" display="block" sx={{ mt: 0.5 }}>
            {project.title}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="Close project details" edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          sx={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: 2,
            overflow: "hidden",
            mb: 4,
          }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 900px) 100vw, 768px"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
          ))}
        </Stack>

        <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>
          The Problem
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
          {project.problem}
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>
          Process
        </Typography>
        <Box component="ol" sx={{ pl: 2.5, mb: 4 }}>
          {project.process.map((step) => (
            <Typography
              key={step}
              component="li"
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 1 }}
            >
              {step}
            </Typography>
          ))}
        </Box>

        {project.images && project.images.length > 0 && (
          <>
            <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
              Key Screens
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: "auto",
                pb: 2,
                mb: 4,
                "&::-webkit-scrollbar": { height: 6 },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "divider",
                  borderRadius: 3,
                },
              }}
            >
              {project.images.map((image, index) => (
                <Box
                  key={image}
                  sx={{
                    position: "relative",
                    minWidth: 280,
                    height: 180,
                    borderRadius: 2,
                    overflow: "hidden",
                    flexShrink: 0,
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    fill
                    sizes="280px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
          </>
        )}

        <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>
          Outcomes
        </Typography>
        <Box component="ul" sx={{ pl: 2.5, mb: 4 }}>
          {project.outcomes.map((outcome) => (
            <Typography
              key={outcome}
              component="li"
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 0.5 }}
            >
              {outcome}
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>
          Tools
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: project.link ? 4 : 0 }}>
          {project.tools.map((tool) => (
            <Chip key={tool} label={tool} size="small" />
          ))}
        </Stack>

        {project.link && (
          <Typography
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "primary.main",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            View live project
            <OpenInNewIcon sx={{ fontSize: 18 }} />
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
