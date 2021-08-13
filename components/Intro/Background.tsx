import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'fixed',
      backgroundImage: 'url(hexagon.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      zIndex: -2,
    },
    backgroundOverlay: {
      zIndex: -1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  })
);

export type BackgroundProps = {
  // props
};

export default function Background({}: BackgroundProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background} />
      <div className={classes.backgroundOverlay} />
    </>
  );
}
