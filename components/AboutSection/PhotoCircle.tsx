import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    PhotoCircleContainer: ({ size = 300 }: PhotoCircleProps) => ({
      height: size,
      width: size,
      borderRadius: 300,
      overflow: 'hidden',
      position: 'relative',
    }),
  })
);

export type PhotoCircleProps = React.HTMLProps<HTMLDivElement> & {
  image: string;
  alt?: string;
  size?: number;
};

export default function PhotoCircle(props: PhotoCircleProps) {
  const { image, alt = '', size, className, ...divProps } = props;
  const classes = useStyles(props);
  return (
    <div
      className={`${classes.PhotoCircleContainer} ${className}`}
      {...divProps}
    >
      <Image
        src={image}
        alt={alt}
        layout='fill'
        objectFit='contain'
        objectPosition='center'
      />
    </div>
  );
}
