import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AnimatedLogo from 'components/AnimatedLogo';
import Separator from 'components/Separator';
import Projects from 'pages/projects';
import React from 'react';
import theme from 'pages/_theme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Contact from '../components/Contact';
import { Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

const backgroundColors = {
  hero: blueGrey[900],
  aboutSection: blueGrey[500],
  projectsSection: blueGrey[200],
  contactSection: blueGrey[500],
};

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'inherit',
    },
    hero: { background: backgroundColors.hero },
    aboutSection: { background: backgroundColors.aboutSection },
    projectsSection: { background: backgroundColors.projectsSection },
    contactSection: { background: backgroundColors.contactSection },
  })
);

export default function index() {
  const classes = useStyles();

  const Hero = () => (
    <Typography variant='h1'>
      <AnimatedLogo startingPosition='open' />
    </Typography>
  );
  const About = () => <div>This is the about section</div>;

  return (
    <>
      <div className={classes.hero}>
        <Container className={classes.container} maxWidth='lg'>
          <Hero />
        </Container>
      </div>
      <Separator
        topColor={backgroundColors.hero}
        bottomColor={backgroundColors.aboutSection}
        type='curve-down'
      />
      <div className={classes.aboutSection}>
        <Container className={classes.container} maxWidth='lg'>
          <About />
        </Container>
      </div>
      <Separator
        topColor={backgroundColors.aboutSection}
        bottomColor={backgroundColors.projectsSection}
        type='curve-up'
      />
      <div className={classes.projectsSection}>
        <Container className={classes.container} maxWidth='lg'>
          <Projects />
        </Container>
      </div>
      <Separator
        topColor={backgroundColors.projectsSection}
        bottomColor={backgroundColors.contactSection}
        type='big-triangle'
      />
      <Element name='contact'>
        <div className={classes.contactSection}>
          <Container className={classes.container} maxWidth='lg'>
            <Contact />
          </Container>
        </div>
      </Element>
    </>
  );
}
