import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import IntroParagraph from './IntroParagraph';
import MyName from './MyName';

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'relative',
      backgroundImage: 'url(hexagon.svg)',
    },
    IntroSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      color: '#f1faee',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(5),
      '&>*': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
    divider: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      margin: 0,
    },
    dividerSvg: {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '50px',
    },
    dividerShapeFill: { fill: '#f1faee' },
  })
);

export default function IntroSection() {
  const classes = useStyles();

  function Divider() {
    return (
      <div className={classes.divider}>
        <svg
          className={classes.dividerSvg}
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z'
            className={classes.dividerShapeFill}
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={classes.background}>
      <Container className={classes.IntroSectionContainer}>
        <MyName />
        <IntroParagraph />
      </Container>
      <Divider />
    </div>
  );
}
