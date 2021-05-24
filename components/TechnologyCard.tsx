import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

export default function TechnologyCard() {
  const classes = useStyles();
  return <div className={classes.container}></div>;
};