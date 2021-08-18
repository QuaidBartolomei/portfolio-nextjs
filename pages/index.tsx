import blueGrey from '@material-ui/core/colors/blueGrey';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AboutSection from 'components/AboutSection/AboutSection';
import ContactSection from 'components/ContactSection/ContactSection';
import { Footer } from '@quaidbartolomei/material-ui.layout.footer';
import IntroSection from 'components/Intro/IntroSection';
import { Navbar } from 'components/Navbar/Navbar';
import ProjectSection from 'components/ProjectSection/ProjectSection';
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
      <Paper square elevation={24} className={classes.background}>
        <Navbar />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Paper>
      <Footer owner='Quaid Bartolomei' />
    </>
  );
}
