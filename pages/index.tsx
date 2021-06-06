import { Typography } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AnimatedLogo from 'components/AnimatedLogo';
import Separator from 'components/Separator';
import Projects from 'pages/projects';
import React from 'react';
import { Element } from 'react-scroll';
import Contact from 'components/Contact';
import TechShowcase from 'components/TechShowcase';
import Exhibit from 'components/Exhibit';
import IntroSection from 'components/Intro/IntroSection';

const backgroundColors = {
  hero: blueGrey[200],
  aboutSection: blueGrey[900],
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
      backgroundColor: 'transparent',
    },
    hero: { background: backgroundColors.hero },
    aboutSection: {
      backgroundColor: backgroundColors.aboutSection,
    },
    projectsSection: { background: backgroundColors.projectsSection },
    contactSection: { background: backgroundColors.contactSection },
  })
);

export default function index() {
  const classes = useStyles();

  const Hero = () => (
    <Typography variant='h1'>
      <AnimatedLogo />
    </Typography>
  );
  const About = () => <TechShowcase />;

  return (
    <>
      <div className={classes.hero}>
        <IntroSection />
      </div>
      <Separator
        topColor={backgroundColors.hero}
        bottomColor={backgroundColors.aboutSection}
        type='curve-down'
      />
      <div className={classes.aboutSection}>
        <Exhibit />
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
        type='big-half-circle'
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
