import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import personalData from 'data/personalData';
import React from 'react';
import Background from './Background';
import ContactLinkButton from './ContactLinkButton';
import ProjectsLinkButton from './ProjectsLinkButton';

export default function IntroSection() {
  return (
    <Box
      component='section'
      sx={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Background />
      <Content />
    </Box>
  );
}

const Content = () => {
  const { name } = personalData;
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
      }}
    >
      <Container
        sx={{
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'primary.contrastText',
        }}
      >
        <Typography variant='h4'>{name}</Typography>
        <Typography paragraph variant='subtitle1'>
          Full Stack Web Developer
        </Typography>
        <PageLinks />
      </Container>
    </Box>
  );
};

const PageLinks = () => (
  <Stack
    sx={{
      mt: 2,
    }}
    direction='row'
    alignItems='center'
    justifyContent='center'
    flexWrap='wrap'
    spacing={2}
  >
    <ProjectsLinkButton />
    <ContactLinkButton />
  </Stack>
);
