import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TechShowcase from 'components/AboutSection/TechShowcase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    AboutSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
    },
  })
);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.AboutSectionContainer}>
      <img src='Responsive-amico.svg' />
      <Typography variant='h4' className={classes.title}
      paragraph
      >
        About Me
      </Typography>
      <TechShowcase />
    </div>
  );
}
