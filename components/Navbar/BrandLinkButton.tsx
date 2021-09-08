import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import personalData from 'data/personalData';
import React from 'react';
import { animateScroll } from 'react-scroll';

export type BrandLinkButtonProps = {
  // props
};

export default function BrandLinkButton({}: BrandLinkButtonProps) {
  const { name } = personalData;
  return (
    <Button
      onClick={animateScroll.scrollToTop}
      sx={{
        textTransform: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        color: 'common.white',
      }}
    >
      <Typography
        color='inherit'
        variant='h6'
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        {name}
      </Typography>
    </Button>
  );
}
