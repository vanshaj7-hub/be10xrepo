"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Section from "@/components/layout/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects, sectionCopy } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Section
        id="projects"
        title={sectionCopy.projects.title}
        subtitle={sectionCopy.projects.subtitle}
      >
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
