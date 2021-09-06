import Box from '@mui/material/Box';
import { BoxProps } from '@mui/system/Box';
import Image from 'next/image';
import React from 'react';

export type PhotoCircleProps = BoxProps & {
  image: string;
  alt?: string;
  size?: number;
};

export default function PhotoCircle(props: PhotoCircleProps) {
  const { image, alt = '', size = 300, sx, ...boxProps } = props;
  return (
    <Box
      sx={{
        height: size,
        width: size,
        borderRadius: 300,
        overflow: 'hidden',
        position: 'relative',
        ...sx,
      }}
      {...boxProps}
    >
      <Image
        src={image}
        alt={alt}
        layout='fill'
        objectFit='contain'
        objectPosition='center'
      />
    </Box>
  );
}
