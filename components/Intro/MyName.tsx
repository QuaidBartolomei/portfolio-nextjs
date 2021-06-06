import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AnimatedLogo from 'components/AnimatedLogo';

const useStyles = makeStyles(theme =>
  createStyles({
    MyNameContainer: {
      // styles here
    },
  })
);

export default function MyName() {
  const classes = useStyles();
  return (
    <div className={classes.MyNameContainer}>
      <AnimatedLogo />
    </div>
  );
}
