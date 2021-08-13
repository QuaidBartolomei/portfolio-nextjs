import React, { HTMLAttributes } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import Link from '@material-ui/core/Link';
import { ProjectData } from '../projectData';

const useStyles = makeStyles(theme =>
  createStyles({
    links: {
      padding: 0,
      marginTop: theme.spacing(2),
    },
    description: {
      flexGrow: 1,
    },
  })
);

export type ProjectDetailsProps = {
  projectData: ProjectData;
};

export default function ProjectDetails(
  props: HTMLAttributes<HTMLDivElement> & ProjectDetailsProps
) {
  const { projectData, ...divProps } = props;

  const { name, demo, github, technologiesUsed, description } = projectData;

  const classes = useStyles();
  const Title = () => (
    <Typography gutterBottom variant='h5' component='h2'>
      {name}
    </Typography>
  );

  const TechnologiesUsed = () => (
    <Typography gutterBottom variant='subtitle2'>
      {technologiesUsed.join(' - ')}
    </Typography>
  );

  const Description = () => (
    <Typography
      className={classes.description}
      variant='body2'
      color='textSecondary'
      component='p'
    >
      {description}
    </Typography>
  );

  const LiveDemoLink = () => (
    <Link href={demo}>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<PublicIcon />}
      >
        Live Demo
      </Button>
    </Link>
  );

  const GitHubLink = () => (
    <Link href={github}>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<GitHubIcon />}
      >
        Source Code
      </Button>
    </Link>
  );

  const Links = () => (
    <CardActions className={classes.links}>
      <LiveDemoLink />
      <GitHubLink />
    </CardActions>
  );

  return (
    <div {...divProps}>
      <Title />
      <TechnologiesUsed />
      <Description />
      <Links />
    </div>
  );
}
