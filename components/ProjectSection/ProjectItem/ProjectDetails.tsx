import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/system/Box';
import React from 'react';
import { ProjectData } from 'data/projectData';

export type ProjectDetailsProps = {
  projectData: ProjectData;
};

export default function ProjectDetails(props: BoxProps & ProjectDetailsProps) {
  const { projectData, ...boxProps } = props;

  const {
    name,
    liveDemoUrl,
    github,
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

  const LiveDemoLink = () => (
    <Link href={liveDemoUrl}>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<PublicIcon />}
      >
        Live Demo
      </Button>
    </Link>
  );

  const GitHubLink = () => (
    <Link href={github}>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<GitHubIcon />}
      >
        Source Code
      </Button>
    </Link>
  );

  const Links = () => (
    <Box
      sx={{
        padding: 0,
        mt: 2,
      }}
    >
      <LiveDemoLink />
      <GitHubLink />
    </Box>
  );

  return (
    <Box {...boxProps}>
      <Title />
      <TechnologiesUsed />
      <Description />
      <Links />
    </Box>
  );
}
