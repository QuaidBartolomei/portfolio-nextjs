import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FullscreenImage } from '@quaidbartolomei/material-ui.image.fullscreen-image';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import Link from '@material-ui/core/Link';
import { ProjectItemProps } from './ProjectItem';
import { ProjectData } from '../projectData';

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
  projectData: ProjectData;
};

export default function ProjectItemThumbnail({
  projectData,
}: ProjectItemThumbnailProps) {
  const classes = useStyles();
  const { imageUrl, name, demo } = projectData;
  const [showFullImage, setShowFullImage] = React.useState(false);

  return (
    <Link href={demo}>
      <Paper>
        <Image
          height={180}
          width={320}
          className={classes.image}
          src={imageUrl}
        />
      </Paper>
    </Link>
  );
}
