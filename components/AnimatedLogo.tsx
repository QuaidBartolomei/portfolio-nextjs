import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'pages/_theme';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useHover } from 'react-use-gesture';

const spacing = '1em';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    l: {
      paddingTop: '.2em',
    },
    uaid: {
      position: 'absolute',
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

export default function AnimatedLogo({
  startingPosition = 'closed',
  moveToStart = false,
}: {
  startingPosition?: 'open' | 'closed';
  moveToStart?:boolean
}) {
  const classes = useStyles();

  const elements = {
    b: {
      startingPosition: positions.b[startingPosition],
      endingPosition:
        positions.b[startingPosition === 'open' ? 'closed' : 'open'],
    },
    q: {
      startingPosition: positions.q[startingPosition],
      endingPosition:
        positions.q[startingPosition === 'open' ? 'closed' : 'open'],
    },
  };

  const [qSpring, qApi] = useSpring(() => elements.q.startingPosition);
  const [bSpring, bApi] = useSpring(() => elements.b.startingPosition);

  const [position, setPosition] =
    React.useState<'auto' | 'open' | 'closed'>('auto');

  function close() {
    startAnimation();
    setPosition('closed');
  }

  function open() {
    resetAnimation();
    setPosition('open');
  }

  function startAnimation() {
    qApi.stop();
    bApi.stop();
    qApi.start(elements.q.endingPosition);
    bApi.start(elements.b.endingPosition);
  }

  function resetAnimation() {
    qApi.stop();
    bApi.stop();
    qApi.start(elements.q.startingPosition);
    bApi.start(elements.b.startingPosition);
  }

  const bind = useHover(({ hovering }) => {
    if (position !== 'auto') return;
    hovering && startAnimation();
    !hovering && resetAnimation();
  });

  return (
    <div
      {...bind()}
      className={classes.container}
      onFocus={() => console.log('focus')}
      onClick={() => {
        switch (position) {
          case 'auto':
          case 'open':
            close();
            break;
          case 'closed':
            open();
            break;
        }
      }}
    >
      <animated.div style={qSpring}>q</animated.div>
      <div className={classes.l}>l</div>
      <animated.div style={bSpring}>b</animated.div>
    </div>
  );
}
