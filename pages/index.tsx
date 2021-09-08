import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AboutSection from 'components/AboutSection/AboutSection';
import ContactSection from 'components/ContactSection/ContactSection';
import { Footer } from 'components/Footer';
import IntroSection from 'components/Intro/IntroSection';
import { Navbar } from 'components/Navbar/Navbar';
import ProjectSection from 'components/ProjectSection/ProjectSection';
import React from 'react';
import { theme } from 'utils/theme';

export default function index() {
  return (
    <>
      <IntroSection />
      <Navbar />
      <Paper
        component='main'
        square
        elevation={24}
        sx={{
          py: 10,
          position: 'relative',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={12}
        >
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </Stack>
      </Paper>
      <Footer copyright='Quaid Bartolomei' />
    </>
  );
}
