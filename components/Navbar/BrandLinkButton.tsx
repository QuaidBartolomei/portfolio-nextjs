import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { animateScroll } from 'react-scroll';
import personalData from 'utils/personalData';

const useStyles = makeStyles(theme =>
  createStyles({
    BrandLinkButtonContainer: {
      // styles here
    },
    brandLinkButton: {
      textTransform: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      color: theme.palette.common.white,
    },
    text: { width: '100%', height: '100%' },
  })
);

export type BrandLinkButtonProps = {
  // props
};

export default function BrandLinkButton({}: BrandLinkButtonProps) {
  const classes = useStyles();
  const { name } = personalData;
  return (
    <Button
      onClick={animateScroll.scrollToTop}
      className={classes.brandLinkButton}
    >
      <Typography color='inherit' variant='h6' className={classes.text}>
        {name}
      </Typography>
    </Button>
  );
}
