import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import PhotoCircle from './PhotoCircle';

export default function AboutMe() {
  return (
    <Container
      maxWidth='xs'
      disableGutters
      sx={{
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ml: 0,
        mr: 2,
      }}
    >
      <PhotoCircle
        alt='Quaid Bartolomei'
        image='/me.jpg'
        sx={{
          mb: 2,
        }}
      />
      <Typography variant='h4' align='center'>
        About Me
      </Typography>
      <Typography align='center'>
        Hello, my name is Quaid and I am a MERN stack web developer. I care a
        great deal about the maintainabality and readability of my code and am
        always keeping an eye out for the best paradigms and frameworks.
      </Typography>
    </Container>
  );
}
