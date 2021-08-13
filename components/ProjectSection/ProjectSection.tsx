import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import { Element } from 'react-scroll';
import projectData from './projectData';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      minHeight: '100vh',
      flexWrap: 'wrap',
      marginTop: theme.spacing(10),
    },
    projects: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      '&>*:not(:last-child)': {
        marginBottom: theme.spacing(5),
      },
    },
    title: {
      marginBottom: theme.spacing(4),
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
      <Element name='projects' />
      <Container className={classes.container} maxWidth='lg'>
        <Typography paragraph variant='h4' className={classes.title}>
          Recent Projects
        </Typography>
        <Projects />
      </Container>
    </>
  );
}
