import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Footer } from '@quaidbartolomei/material-ui.layout.footer';
import AboutSection from 'components/AboutSection/AboutSection';
import ContactSection from 'components/ContactSection/ContactSection';
import IntroSection from 'components/Intro/IntroSection';
import { Navbar } from 'components/Navbar/Navbar';
import ProjectSection from 'components/ProjectSection/ProjectSection';
import React from 'react';
import { theme } from './_theme';

const useStyles = makeStyles(theme =>
  createStyles({
    mainContent: {
      paddingTop: theme.spacing(6),
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      '&>*': {
        paddingBottom: theme.spacing(12),
      },
    },
    footer: { color: theme.palette.text.secondary },
  })
);

export default function index() {
  const classes = useStyles();

  return (
    <>
      <IntroSection />
      <Navbar />
      <Paper
        component='main'
        square
        elevation={24}
        className={classes.mainContent}
      >
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Paper>
      <Footer className={classes.footer} copyright='Quaid Bartolomei' />
    </>
  );
}
