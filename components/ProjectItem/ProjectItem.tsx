import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
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
      padding: theme.spacing(2)
    },
    projectsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap:'wrap',
      '&>*': {
        margin: theme.spacing(1),
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
  const { imageUrl, name, technologiesUsed, description } = props;

  return (
    <div className={classes.projectsContainer}>
      <BackdroppedContent top left spacing={2}>
        <Paper className={''}>
        <img
          style={{
            height: 180,
            width: 320,
          }}
          src={imageUrl}
        />
        </Paper>
      </BackdroppedContent>
      <BackdroppedContent bottom right spacing={2}>
        <Paper className={classes.details}>
          <ProjectDetails {...props} />
        </Paper>
      </BackdroppedContent>
    </div>
  );
}
