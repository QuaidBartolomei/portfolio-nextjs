import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { HTMLAttributes } from 'react';

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  spacing?: number;
}

const useStyles = makeStyles(theme =>
  createStyles({
    BackdroppedImageContainer: {
      position: 'relative',
      height: '100%',
      width: '100%',
    },
    foreground: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      zIndex: 2,
      position: 'relative',
    },
    background: (props: Props) => {
      const {
        spacing = 2,
        left = false,
        bottom = false,
        right = false,
        top = false,
      } = props;
      return {
        position: 'absolute',
        zIndex: 1,
        height: '100%',
        width: '100%',
        top: bottom ? theme.spacing(spacing) : 'auto',
        right: left ? theme.spacing(spacing) : 'auto',
        bottom: top ? theme.spacing(spacing) : 'auto',
        left: right ? theme.spacing(spacing) : 'auto',
        backgroundColor: theme.palette.primary.dark,
      };
    },
  })
);

export default function BackdroppedContent(
  props: HTMLAttributes<HTMLDivElement> & Props
) {
  const { children, top, left, right, bottom, spacing, ...divProps } = props;

  const classes = useStyles({ top, left, right, bottom, spacing });

  return (
    <div {...divProps}>
      <div className={classes.BackdroppedImageContainer}>
        <div className={classes.background} />
        <div className={classes.foreground}>{children}</div>
      </div>
    </div>
  );
}
