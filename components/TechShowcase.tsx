import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    image: {
      height: 64,
      width: 64,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    imageBackground: {
      backgroundColor: 'rgba(255,255,255,.8)',
      padding: theme.spacing(1),
      borderRadius: 15,
    },
  })
);

const tech = [
  'react.svg',
  'typescript.svg',
  'mongodb.svg',
  'npm.svg',
  'node.svg',
];

export default function TechShowcase() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h3'>
        Designing websites with the latest technologies.
      </Typography>
      <div className={classes.techList}>
        {tech.map(imgUrl => (
          <div key={imgUrl} className={classes.imageBackground}>
            <div
              className={classes.image}
              style={{ backgroundImage: `url("${imgUrl}")` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
