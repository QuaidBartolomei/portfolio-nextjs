import { createStyles, makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

const spacing = '1em';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      minWidth: 300,
    },
    l: {
      paddingTop: '.2em',
    },
    artolomei: {
      fontSize: '.5em',
      position: 'absolute',
      top: '0.9em',
      left: '2.6em',
    },
    ouis: {
      fontSize: '.5em',
      position: 'absolute',
      top: '2em',
      left: '1.5em',
    },
    uaid: {
      fontSize: '.5em',
      position: 'absolute',
      top: '3em',
      left: '1em',
    },
  })
);

const positions = {
  b: {
    open: {
      paddingBottom: spacing,
    },
    closed: {
      paddingBottom: '0em',
    },
  },
  q: {
    open: {
      paddingTop: spacing,
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
  const [showOtherLetters, setShowOtherLetters] = React.useState(false);

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const options = {
    reverse: scrollTrigger,
    delay: hasPlayed ? 0 : 800,
  };

  const otherLetters = useSpring({
    opacity: !scrollTrigger ? 1 : 0,
    height: !scrollTrigger ? 60 : 0,
  });

  const qSpring = useSpring({
    from: positions.q.closed,
    to: positions.q.open,
    onStart: () => {
      setShowOtherLetters(false);
    },

    onRest: () => {
      setHasPlayed(true);
      setShowOtherLetters(state => !state);
    },
    ...options,
  });

  const bSpring = useSpring({
    from: positions.b.closed,
    to: positions.b.open,
    ...options,
  });

  return (
    <Fade>
      <div className={classes.container}>
        <animated.div style={qSpring}>q</animated.div>
        <div className={classes.l}>l</div>
        <animated.div style={bSpring}>b</animated.div>

        {hasPlayed && (
          <Fade>
            <animated.div style={otherLetters}>
              <div className={classes.uaid}>uaid</div>
              <div className={classes.ouis}>ouis</div>
              <div className={classes.artolomei}>artolomei</div>
            </animated.div>
          </Fade>
        )}
      </div>
    </Fade>
  );
}
