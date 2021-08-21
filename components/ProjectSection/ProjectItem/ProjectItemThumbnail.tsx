import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FullscreenImage } from '@quaidbartolomei/material-ui.image.fullscreen-image';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';

const useStyles = makeStyles(theme =>
  createStyles({
    ProjectItemThumbnailContainer: {
      // styles here
    },

    image: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

export type ProjectItemThumbnailProps = {
  imageUrl: string;
};

export default function ProjectItemThumbnail({
  imageUrl,
}: ProjectItemThumbnailProps) {
  const classes = useStyles();
  const [showFullImage, setShowFullImage] = React.useState(false);

  return (
    <>
      <FullscreenImage
        image={imageUrl}
        onClick={() => setShowFullImage(false)}
        open={showFullImage}
        style={{
          margin: 0,
        }}
      />
      <Paper onClick={() => setShowFullImage(true)}>
        <Image
          height={180}
          width={320}
          className={classes.image}
          src={imageUrl}
        />
      </Paper>
    </>
  );
}
