import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TechShowcase from 'components/AboutSection/TechShowcase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {},
  })
);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.AboutSectionContainer}>
      <img src='Responsive-amico.svg' />
      <Typography variant='h4' className={classes.title} paragraph>
        About Me
      </Typography>

      <Container>
        <Typography paragraph
        align='center'
        >
          Hello, my name is Quaid and I am a MERN stack web developer. I care a
          great deal about the maintainabality and readability of my code and am
          always keeping an eye out for the best paradigms and frameworks.
        </Typography>
        <TechShowcase />
      </Container>
    </div>
  );
}
