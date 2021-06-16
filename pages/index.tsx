import blueGrey from '@material-ui/core/colors/blueGrey';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AboutSection from 'components/AboutSection/AboutSection';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import IntroSection from 'components/Intro/IntroSection';
import Projects from 'pages/projects';
import React from 'react';

const backgroundColors = {
  hero: blueGrey[200],
  aboutSection: blueGrey[900],
  projectsSection: blueGrey[500],
  contactSection: blueGrey[700],
};

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },
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

  return (
    <>
      <IntroSection />
      <div className={classes.background}>
        <AboutSection />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
