import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from 'react';
import AboutMe from './AboutMe';
import DevelopmentToolbox from './DevelopmentToolbox';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 400,
    },
    imageContainer: {
      margin: theme.spacing(1),
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
      <div className={classes.imageContainer}>
        <Image src='/Responsive-amico.svg' height={300} width={300} />
      </div>
      <div className={classes.container}>
        <AboutMe />
        <DevelopmentToolbox />
      </div>
    </Container>
  );
}
