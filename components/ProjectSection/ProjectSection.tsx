import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { scrollData } from 'utils/scrollTargets';
import projectData from 'data/projectData';
import ProjectItem from './ProjectItem/ProjectItem';

export default function ProjectSection() {
  const Projects = () => (
    <Stack
      direction='column'
      alignItems='center'
      spacing={{
        lg: 12,
        xs: 8,
      }}
    >
      {projectData.map(projectData => (
        <ProjectItem projectData={projectData} key={projectData.name} />
      ))}
    </Stack>
  );

  return (
    <Container
      component='section'
      maxWidth='lg'
      id={scrollData.projects.target}
    >
      <Typography
        variant='h4'
        sx={{
          mb: 4,
          textAlign: 'center',
        }}
      >
        Recent Projects
      </Typography>
      <Projects />
    </Container>
  );
}
