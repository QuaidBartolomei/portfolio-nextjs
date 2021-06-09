import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    MyNameContainer: {
    },
  })
);

export default function MyName() {
  const classes = useStyles();
  return (
    <div className={classes.MyNameContainer}>
      <Typography variant='h2'>Quaid</Typography>
    </div>
  );
}
