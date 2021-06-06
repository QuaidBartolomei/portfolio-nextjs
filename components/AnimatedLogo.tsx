import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    smallLettersContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    bigLettersContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginRight: theme.spacing(2),
    },
    l: {},
    smallLetters: {
      opacity: 0,
    },
    bigLetter: {
      position: 'relative',
    },
  })
);

const positions = {
  q: {
    open: {
      paddingBottom: '1.8em',
    },
    closed: {
      paddingBottom: '0.4em',
    },
  },
  b: {
    open: {
      paddingTop: '1.8em',
    },
    closed: {
      paddingTop: '0em',
    },
  },
};

interface Props {
  startingPosition?: 'open' | 'closed';
  moveToStart?: boolean;
}

export default function AnimatedLogo({}: Props) {
  const classes = useStyles();

  const otherLettersSpringRef = useSpringRef();
  const otherLetters = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    ref: otherLettersSpringRef,
  });

  const qSpringRef = useSpringRef();

  const qSpring = useSpring({
    from: positions.q.open,
    to: positions.q.closed,
    ref: qSpringRef,
  });

  const bSpring = useSpring({
    from: positions.b.open,
    to: positions.b.closed,
    ref: qSpringRef,
  });

  useChain([qSpringRef, otherLettersSpringRef], [0.5, 1]);

  return (
    <div className={classes.container}>
      <Typography
        variant='h1'
        component='div'
        className={classes.bigLettersContainer}
      >
        <animated.div style={qSpring} className={classes.bigLetter}>
          q
        </animated.div>
        <div className={`${classes.l} ${classes.bigLetter}`}>l</div>
        <animated.div style={bSpring} className={classes.bigLetter}>
          b
        </animated.div>
      </Typography>
      <Typography variant='body1' className={classes.smallLettersContainer}>
        <animated.div style={otherLetters} className={classes.smallLetters}>
          quaid
        </animated.div>
        <animated.div style={otherLetters} className={classes.smallLetters}>
          louis
        </animated.div>
        <animated.div style={otherLetters} className={classes.smallLetters}>
          bartolomei
        </animated.div>
      </Typography>
    </div>
  );
}
