import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    AboutMeContainer: {
// styles here
},
  })
);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Typography
        variant='h4'
        align='center'
        paragraph
      >
        About Me
      </Typography>
      <Typography paragraph align='center'>
        Hello, my name is Quaid and I am a MERN stack web developer. I care a
        great deal about the maintainabality and readability of my code and am
        always keeping an eye out for the best paradigms and frameworks.
      </Typography>
    </Container>
  );
};