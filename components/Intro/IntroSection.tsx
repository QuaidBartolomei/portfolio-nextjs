import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import IntroParagraph from './IntroParagraph';

const height = 400;

const useStyles = makeStyles(theme =>
  createStyles({
    introSection: {
      height,
      width: '100%',
    },
    background: {
      position: 'fixed',
      backgroundImage: 'url(hexagon.svg)',
      height,
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
    introSectionContent: {
      zIndex: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: theme.palette.primary.contrastText,
      '&>*': {},
    },
    contentContainer: {
      height,
      width: '100vw',
      position: 'fixed',
    },
  })
);

export default function IntroSection() {
  const classes = useStyles();

  return (
    <div className={classes.introSection}>
      <div className={classes.background} />
      <div className={classes.backgroundOverlay} />
      <div className={classes.contentContainer}>
        <Container className={classes.introSectionContent}>
          <Typography 
          variant='h4'>Quaid Bartolomei</Typography>
          <IntroParagraph />
        </Container>
      </div>
    </div>
  );
}
