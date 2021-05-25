import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles';
import React from 'react';
import tinycolor from 'tinycolor2';

interface Props {
  bottomColor: string;
  topColor: string;
  type:
    | 'zig-zag'
    | 'double-diagonal'
    | 'big-triangle'
    | 'curve-down'
    | 'curve-up'
    | 'big-half-circle';
}

const dividerProperties: CSSProperties = {
  zIndex: 10,
  display: 'block',
  height: '90px',
  backgroundSize: '50px 100%',
};

const useStyles = makeStyles(theme =>
  createStyles({
    pyramids: {
      ...dividerProperties,
      top: '-90px',
      backgroundImage: ({ bottomColor, topColor }) =>
        `linear-gradient(315deg, ${tinycolor(bottomColor)
          .darken()
          .toString()}  25%, transparent 25%), linear-gradient( 45deg, ${topColor} 25%, transparent 25%)`,
      backgroundPosition: '50%',
    },
    zigZag: {
      ...dividerProperties,
      backgroundColor: ({ bottomColor }) => bottomColor,
      backgroundImage: ({ topColor }: Props) =>
        `linear-gradient(135deg, ${topColor} 25%, transparent 25%), linear-gradient(225deg, ${topColor} 25%, transparent 25%)`,
      backgroundPosition: '50%',
    },
    doubleDiagonal: {
      zIndex: 1,
      paddingTop: '6em',
      backgroundColor: ({ bottomColor }) =>
        tinycolor(bottomColor).darken().toString(),
    },
    doubleDiagonalBefore: {
      height: '50%',
      backgroundColor: ({ topColor }) =>
        tinycolor(topColor).darken().toString(),
      WebkitTransform: 'rotate(-3deg)',
      rotate: '-3deg',
      WebkitTransformOrigin: '3% 0',
      transformOrigin: '3% 0',
      top: '0',
      left: '-25%',
      zIndex: -1,
      width: '150%',
      background: 'inherit',
    },
    doubleDiagonalAfter: {
      top: '0',
      left: '-25%',
      zIndex: -1,
      width: '150%',
      height: '75%',
      background: 'inherit',
      WebkitTransform: 'rotate(-2deg)',
      transform: 'rotate(-2deg)',
      WebkitTransformOrigin: '0 0',
      transformOrigin: '0 0',
    },
  })
);

export default function Separator(props: Props) {
  const classes = useStyles(props);

  const classNames = {
    'zig-zag': <div className={classes.zigZag} />,
    'double-diagonal': (
      <>
        <div className={classes.doubleDiagonalBefore} />
        <div className={classes.doubleDiagonal} />
        <div className={classes.doubleDiagonalAfter} />
      </>
    ),
    'big-triangle': (
      <div
        style={{
          backgroundColor: props.bottomColor,
        }}
      >
        <svg
          id='bigTriangleColor'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          width='100%'
          height='100px'
          viewBox='0 0 100 102'
          preserveAspectRatio='none'
          pointerEvents='none'
        >
          <path
            strokeWidth={2}
            fill={props.topColor}
            stroke={props.topColor}
            d='M0 0 L50 100 L100 0 Z'
          />
        </svg>
      </div>
    ),
    'curve-down': (
      <div
        style={{
          backgroundColor: props.bottomColor,
          height: 100,
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          width='100%'
          height='100'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            d='M0 0 C 50 100 80 100 100 0 Z'
            fill={props.topColor}
            stroke={props.topColor}
          />
        </svg>
      </div>
    ),
    'curve-up': (
      <div
        style={{
          backgroundColor: props.topColor,
          height: 100,
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          width='100%'
          height='100'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            fill={props.bottomColor}
            stroke={props.bottomColor}
            d='M0 100 C 20 0 50 0 100 100 Z'
          />
        </svg>
      </div>
    ),
    'big-half-circle': (
      <div
        style={{
          backgroundColor: props.bottomColor,
        }}
      >
        <svg
          id='bigHalfCircle'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          width='100%'
          height='100'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          transform='scale(1 -1)'
        >
          <path
            d='M0 100 C40 0 60 0 100 100 Z'
            fill={props.topColor}
            stroke={props.topColor}
          />
        </svg>
      </div>
    ),
  };

  const Component = () => classNames[props.type];
  return <Component />;
}
