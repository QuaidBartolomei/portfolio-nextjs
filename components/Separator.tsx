import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles';
import theme from 'pages/_theme';
import tinycolor from 'tinycolor2';
import { blueGrey } from '@material-ui/core/colors';

interface Props {
  bottomColor: string;
  topColor: string;
  type: 'zig-zag'
}

const dividerProperties: CSSProperties = {
  content: '',
  right: '0',
  left: '0',
  zIndex: 10,
  display: 'block',
  height: '90px',
  backgroundSize: '50px 100%',
  boxSizing: 'border-box',
};

const backgroundColor = theme.palette.background.paper;
const contrastColor = tinycolor(theme.palette.background.paper)
  .darken(3)
  .toString();

const useStyles = makeStyles(theme =>
  createStyles({
    before: {
      ...dividerProperties,
      top: '-90px',
      backgroundImage: `linear-gradient(315deg, ${contrastColor}  25%, transparent 25%), linear-gradient( 45deg, ${backgroundColor} 25%, transparent 25%)`,
      backgroundPosition: '50%',
    },
    zigZag: {
      ...dividerProperties,
      backgroundColor: ({ bottomColor }: Props) => bottomColor,
      top: '100%',
      backgroundImage: ({ topColor }: Props) =>
        `linear-gradient(135deg, ${topColor} 25%, transparent 25%), linear-gradient(225deg, ${topColor} 25%, transparent 25%)`,
      backgroundPosition: '50%',
    },
  })
);

export default function Separator(props: Props) {
  const classes = useStyles(props);
  return <div className={classes.zigZag} />;
}
