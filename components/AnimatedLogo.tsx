import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'pages/_theme';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useHover } from 'react-use-gesture';

const spacing = 1.5;

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    q: {
      paddingTop: theme.spacing(1),
    },
    l: {},
    uaid: {
      position: 'absolute',
    },
    b: {
      paddingBottom: theme.spacing(1),
    },
  })
);

export default function AnimatedLogo() {
  const classes = useStyles();

  const [qSpring, qApi] = useSpring(() => ({
    paddingTop: theme.spacing(spacing),
  }));

  const [bSpring, bApi] = useSpring(() => ({
    paddingBottom: theme.spacing(spacing),
  }));

  function startAnimation() {
    qApi.start({
      paddingTop: 0,
    });
    bApi.start({
      paddingBottom: 0,
    });
  }

  function resetAnimation() {
    qApi.start({
      paddingTop: theme.spacing(spacing),
    });
    bApi.start({
      paddingBottom: theme.spacing(spacing),
    });
  }

  const bind = useHover(({ hovering }) => {
    hovering && startAnimation();
    !hovering && resetAnimation();
  });

  return (
    <div
      {...bind()}
      className={classes.container}
      onFocus={() => console.log('focus')}
    >
      <animated.div style={qSpring}>q</animated.div>
      <div className={classes.l}>l</div>
      <animated.div style={bSpring}>b</animated.div>
    </div>
  );
}
