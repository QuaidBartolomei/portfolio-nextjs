import { makeStyles, createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PhotoCircle from './PhotoCircle';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(4),
    },
    photo: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container maxWidth='xs' className={classes.container}>
      <PhotoCircle
        alt='Quaid Bartolomei'
        image='/me.jpg'
        className={classes.photo}
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
