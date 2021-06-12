import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BackdroppedContent from 'components/BackdroppedContent';
import React from 'react';
import ProjectDetails from './ProjectDetails';

const spacing = 2;
const width = 320;

const useStyles = makeStyles(theme =>
  createStyles({
    grid: {},
    card: {
      padding: theme.spacing(spacing),
      [theme.breakpoints.down('sm')]: {
        width,
      },
    },
    projectScreenshotContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    projectScreenshot: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      border: 'thin black solid',
      maxWidth: width,
    },
    title: {},
    imageContainer: {
      width,
      maxWidth: width,
    },
    details: {
      width,
      hyphens: 'none',
      padding: theme.spacing(2),
    },
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
    projectDetails:{
      padding:theme.spacing(1)
    }
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
  const { imageUrl, name, technologiesUsed, description } = props;

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
      <div
      className={classes.projectDetails}
      ><ProjectDetails {...props} /></div>
    </div>
  );
}
