import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FullscreenImage } from '@quaidbartolomei/material-ui.image.fullscreen-image';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    fullscreenImage: {
      margin: 0,
    },
  })
);

export type ProjectItemThumbnailProps = {
  imageUrl: string;
  name: string;
};

export default function ProjectItemThumbnail({
  imageUrl,
  name,
}: ProjectItemThumbnailProps) {
  const classes = useStyles();
  const [showFullImage, setShowFullImage] = React.useState(false);

  return (
    <Paper onClick={() => !showFullImage && setShowFullImage(true)}>
      <FullscreenImage
        image={imageUrl}
        onClick={() => setShowFullImage(false)}
        open={showFullImage}
        alt={name}
        className={classes.fullscreenImage}
      />
      <Image
        height={180}
        width={320}
        className={classes.image}
        src={imageUrl}
      />
    </Paper>
  );
}
