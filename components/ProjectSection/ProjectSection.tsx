import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ProjectItem, { ProjectItemProps } from './ProjectItem/ProjectItem';
import { Element } from 'react-scroll';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      minHeight: '100%',
      flexWrap: 'wrap',
      marginTop: theme.spacing(12),
    },
    projects: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        marginBottom: theme.spacing(5),
      },
    },
  })
);

const projects: ProjectItemProps[] = [
  {
    name: 'CAB Clothing',
    description: 'E commerce site made with React, Typescript and Firebase.',
    imageUrl: '/e-commerce_screenshot.png',
    github: '#',
    demo: 'https://e-commerce-indol.vercel.app/',
    technologiesUsed: ['React', 'Typescript', 'Firebase', 'Material-UI'],
  },
  {
    name: 'Drawnit',
    description: 'Draw on an html canvas with your friends',
    imageUrl: '/drawnit_screenshot.png',
    github: '#',
    demo: '#',
    technologiesUsed: ['React', 'Typescript', 'Node', 'MongoDB', 'Material-UI'],
  },
];

export default function ProjectSection() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth='lg'>
      <Element name='projects' />
      <Typography paragraph variant='h4'>
        Recent Projects
      </Typography>
      <div className={classes.projects}>
        {projects.map(project => (
          <ProjectItem {...project} github='#' demo='#' key={project.name} />
        ))}
      </div>
    </Container>
  );
}
