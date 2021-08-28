import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import React from 'react';
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

  return (
    <Link href={demo}>
      <Paper>
        <Image
          alt={`${name} screenshot`}
          height={180}
          width={320}
          className={classes.image}
          src={imageUrl}
        />
      </Paper>
    </Link>
  );
}
