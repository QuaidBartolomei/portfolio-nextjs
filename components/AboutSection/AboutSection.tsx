import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TechShowcase from 'components/AboutSection/TechShowcase';
import React from 'react';
import AboutMe from './AboutMe';

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
    image: {
      width: 300,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 400,
      marginTop: theme.spacing(4),
    },
    title: {
      marginTop: theme.spacing(4),
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Container className={classes.AboutSectionContainer} maxWidth='lg'>
      <img src='Responsive-amico.svg' className={classes.image} />
      <div className={classes.container}>
        <AboutMe />
        <Typography
          variant='h4'
          className={classes.title}
          align='center'
          paragraph
        >
          My Toolbox
        </Typography>
        <Typography paragraph align='center' variant='subtitle2'>
          These are the frameworks and tools I am most familiar with and have
          used to deploy websites.
        </Typography>
        <TechShowcase />
      </div>
    </Container>
  );
}
