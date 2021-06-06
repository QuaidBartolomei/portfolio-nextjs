import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    IntroParagraphContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    text: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default function IntroParagraph() {
  const classes = useStyles();
  return (
    <div className={classes.IntroParagraphContainer}>
      <Typography className={classes.text} variant='h5'>
        Modern full stack web development
      </Typography>
      <Button variant='contained'>View My Work</Button>
    </div>
  );
}
