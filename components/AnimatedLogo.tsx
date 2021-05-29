import { createStyles, makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigLettersContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      minWidth: 300,
    },
    l: {
    },
    otherLettersContainer: {
      fontSize: '.4em',
    },
    smallLetters: {
      fontSize: '.4em',
      opacity: 0,
      height: 0,
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
  const [hasPlayed, setHasPlayed] = React.useState(false);

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const options = {
    reverse: scrollTrigger,
    delay: hasPlayed ? 0 : 800,
  };

  const otherLettersSpringRef = useSpringRef();
  const otherLetters = useSpring({
    from: {
      opacity: 0,
      height: 0,
    },
    to: {
      opacity: 1,
      height: 60,
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
      <div className={classes.bigLettersContainer}>
        <animated.div style={qSpring} className={classes.bigLetter}>
          q
        </animated.div>
        <div className={`${classes.l} ${classes.bigLetter}`}>l</div>
        <animated.div style={bSpring} className={classes.bigLetter}>
          b
        </animated.div>
      </div>
      <animated.div style={otherLetters} className={classes.smallLetters}>
        Quaid Louis Bartolomei
      </animated.div>
    </div>
  );
}
