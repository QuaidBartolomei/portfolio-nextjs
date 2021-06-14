import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {
  SiMongodb,
  SiNodeDotJs,
  SiNpm,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

const size = 32;

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      height: size,
      width: size,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
    },
    container: {
      display: 'flex',
      textAlign: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 16,
      padding: theme.spacing(1),
      '&>*': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    techItem: {
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 150,
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      marginRight: theme.spacing(0.5),
    },
  })
);

const tech = [
  { Component: SiReact, name: 'React' },
  { Component: SiTypescript, name: 'Typescript' },
  { Component: SiMongodb, name: 'Mongo DB' },
  { Component: SiNpm, name: 'NPM' },
  { Component: SiNodeDotJs, name: 'Node JS' },
  { Component: React.Fragment, name: '...And More' },
];

export default function TechShowcase() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid container
      spacing={1}
      >
        {tech.map(({ Component, name }) => (
          <Grid key={name} item xs={6}>
            <div className={classes.techItem}>
              <div className={classes.iconContainer}>
                <Typography variant='h6' className={classes.icon}>
                  <Component />
                </Typography>
              </div>
              <Typography variant='h6'>{name}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
