import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
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
  })
);

export interface ProjectItemProps {
  name: string;
  description: string;
  github: string;
  demo: string;
  imageUrl: string;
  technologiesUsed: string[];
}

export default function ProjectItem(props: ProjectItemProps) {
  const classes = useStyles();
  const { imageUrl } = props;

  return (
    <div className={classes.projectsContainer}>
      <Paper className={''}>
        <img
          style={{
            height: 180,
            width: 320,
          }}
          src={imageUrl}
        />
      </Paper>
      <div className={classes.projectDetails}>
        <ProjectDetails {...props} />
      </div>
    </div>
  );
}
