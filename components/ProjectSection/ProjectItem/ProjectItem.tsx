import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FullscreenImage } from '@quaidbartolomei/material-ui.image.fullscreen-image';
import React from 'react';
import { ProjectData } from '../projectData';
import ProjectDetails from './ProjectDetails';

const useStyles = makeStyles(theme =>
  createStyles({
    projectsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    projectDetails: {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        width: 320,
      },
    },
    image: {
      height: 180,
      width: 320,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

export interface ProjectItemProps {
  projectData: ProjectData;
}

export default function ProjectItem(props: ProjectItemProps) {
  const classes = useStyles();
  const { imageUrl } = props.projectData;
  const [showFullImage, setShowFullImage] = React.useState(false);

  return (
    <>
      <FullscreenImage
        image={imageUrl}
        onClick={() => setShowFullImage(false)}
        open={showFullImage}
      />
      <div className={classes.projectsContainer}>
        <Paper onClick={() => setShowFullImage(true)}>
          <img className={classes.image} src={imageUrl} />
        </Paper>
        <div className={classes.projectDetails}>
          <ProjectDetails {...props} />
        </div>
      </div>
    </>
  );
}
