import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  SiTypescript,
  SiReact,
  SiMongodb,
  SiNodeDotJs,
  SiNpm,
} from 'react-icons/si';
import Container from '@material-ui/core/Container';

const size = 32;

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    image: {
      height: size,
      width: size,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: 'medium black solid',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    imageBackground: {
      padding: theme.spacing(1),
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
      marginRight: theme.spacing(1),
    },
  })
);

const tech = [
  { Component: SiReact, name: 'React' },
  { Component: SiTypescript, name: 'Typescript' },
  { Component: SiMongodb, name: 'Mongo DB' },
  { Component: SiNpm, name: 'NPM' },
  { Component: SiNodeDotJs, name: 'Node JS' },
];

export default function TechShowcase() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.techList}>
        {tech.map(({ Component, name }) => (
          <div key={name} className={classes.imageBackground}>
            <div className={classes.iconContainer}>
              <Typography variant='h6' className={classes.icon}>
                <Component />
              </Typography>
            </div>
            <Typography variant='h6'>{name}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
}
