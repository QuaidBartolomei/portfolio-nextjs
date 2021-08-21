import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ProjectData } from '../projectData';
import ProjectDetails from './ProjectDetails';
import ProjectItemThumbnail from './ProjectItemThumbnail';

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
  })
);

export interface ProjectItemProps {
  projectData: ProjectData;
}

export default function ProjectItem(props: ProjectItemProps) {
  const classes = useStyles();
  const { imageUrl } = props.projectData;

  return (
    <>
      <div className={classes.projectsContainer}>
        <ProjectItemThumbnail imageUrl={imageUrl} />
        <div className={classes.projectDetails}>
          <ProjectDetails {...props} />
        </div>
      </div>
    </>
  );
}
