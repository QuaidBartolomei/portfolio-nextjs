import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/system/Box';
import { ProjectData } from 'data/projectData';
import React from 'react';
import ProjectDetailsLinks from './ProjectDetailsLinks';

export type ProjectDetailsProps = {
  projectData: ProjectData;
};

export default function ProjectDetails(props: BoxProps & ProjectDetailsProps) {
  const { projectData, ...boxProps } = props;

  const {
    name,
    technologiesUsed,
    description,
  } = projectData;

  const Title = () => (
    <Typography gutterBottom variant='h5' component='h2'>
      {name}
    </Typography>
  );

  const TechnologiesUsed = () => (
    <Typography gutterBottom variant='subtitle2'>
      {technologiesUsed.join(' - ')}
    </Typography>
  );

  const Description = () => (
    <Typography
      sx={{
        flexGrow: 1,
      }}
      variant='body2'
      color='textSecondary'
      component='p'
    >
      {description}
    </Typography>
  );

  return (
    <Box {...boxProps}>
      <Title />
      <TechnologiesUsed />
      <Description />
      <ProjectDetailsLinks projectData={projectData} />
    </Box>
  );
}
