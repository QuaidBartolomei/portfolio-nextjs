import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MyName from './MyName';
import IntroParagraph from './IntroParagraph';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme =>
  createStyles({
    IntroSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      minHeight: '100vh',
    },
  })
);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <Container className={classes.IntroSectionContainer}>
      <MyName />
      <IntroParagraph />
    </Container>
  );
}
