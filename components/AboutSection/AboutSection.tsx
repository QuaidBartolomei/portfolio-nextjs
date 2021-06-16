import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TechShowcase from 'components/AboutSection/TechShowcase';
import React from 'react';
import AboutMe from './AboutMe';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
    },
    image: {
      width: 300,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 400,
      marginTop:theme.spacing(4)
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Container className={classes.AboutSectionContainer} maxWidth='lg'>
      <img src='Responsive-amico.svg' className={classes.image} />
      <div className={classes.container}>
        <AboutMe />
        <TechShowcase />
      </div>
    </Container>
  );
}
