import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import { Element } from 'react-scroll';
import projectData from './projectData';
import scrollTargets from 'utils/scrollTargets';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '100vh',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: { marginTop: theme.spacing(10) },
    },
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
      marginBottom: theme.spacing(8),
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
    <>
      <Element name={scrollTargets.projects} />
      <Container className={classes.container} maxWidth='lg'>
        <Typography variant='h4' className={classes.title}>
          Recent Projects
        </Typography>
        <Projects />
      </Container>
    </>
  );
}
