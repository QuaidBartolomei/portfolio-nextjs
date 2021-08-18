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
      minHeight: '100vh',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 400,
      marginTop: theme.spacing(4),
    },
    imageContainer: {
      margin: theme.spacing(1),
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <Container className={classes.AboutSectionContainer} maxWidth='lg'>
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
