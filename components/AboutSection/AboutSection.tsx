import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TechShowcase from 'components/AboutSection/TechShowcase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
    },
    title: {},
    image: {
      width: 300,
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Container className={classes.AboutSectionContainer} maxWidth='lg'>
      <img src='Responsive-amico.svg' className={classes.image} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth:400,
        }}
      >
        <Container maxWidth='xs'>
          <Typography variant='h4' className={classes.title} paragraph>
            About Me
          </Typography>
          <Typography paragraph align='center'>
            Hello, my name is Quaid and I am a MERN stack web developer. I care
            a great deal about the maintainabality and readability of my code
            and am always keeping an eye out for the best paradigms and
            frameworks.
          </Typography>
        </Container>
        <TechShowcase />
      </div>
    </Container>
  );
}
