import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AboutMe from './AboutMe';
import DevelopmentToolbox from './DevelopmentToolbox';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <Container
      component='section'
      className={classes.AboutSectionContainer}
      maxWidth='lg'
    >
      <AboutMe />
      <DevelopmentToolbox />
    </Container>
  );
}
