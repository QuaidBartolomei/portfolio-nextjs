import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import scrollTargets from 'utils/scrollTargets';
import projectData from './projectData';
import ProjectItem from './ProjectItem/ProjectItem';

const useStyles = makeStyles(theme =>
  createStyles({
    projects: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&>*:not(:last-child)': {
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down('sm')]: { marginBottom: theme.spacing(8) },
      },
    },
    title: {
      marginBottom: theme.spacing(4),
      textAlign: 'center',
    },
  })
);

export default function ProjectSection() {
  const classes = useStyles();

  const Projects = () => (
    <div className={classes.projects}>
      {projectData.map(projectData => (
        <ProjectItem projectData={projectData} key={projectData.name} />
      ))}
    </div>
  );

  return (
    <Container component='section' maxWidth='lg' id={scrollTargets.projects}>
      <Typography variant='h4' className={classes.title}>
        Recent Projects
      </Typography>
      <Projects />
    </Container>
  );
}
