import React, { HTMLAttributes } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';

const spacing = 1;

const useStyles = makeStyles(theme =>
  createStyles({
    grid: {},
    projectScreenshotContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    title: {},
    links: {
      padding: 0,
      marginTop: theme.spacing(2),
    },
    description: {
      flexGrow: 1,
    },
  })
);

interface Props {
  name: string;
  description: string;
  github: string;
  demo: string;
  imageUrl: string;
  technologiesUsed: string[];
}

export default function ProjectDetails(
  props: HTMLAttributes<HTMLDivElement> & Props
) {
  const { name, demo, github, technologiesUsed, description, ...divProps } =
    props;
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

  const Links = () => (
    <CardActions className={classes.links}>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<PublicIcon />}
      >
        Live Demo
      </Button>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        startIcon={<GitHubIcon />}
      >
        Source Code
      </Button>
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
