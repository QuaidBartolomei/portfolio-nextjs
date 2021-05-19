import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      width: 300,
      padding: theme.spacing(1),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid thin black',
      '&>*': {
        margin: theme.spacing(0.5),
      },
    },
    projectScreenshot: {
      maxHeight: 160,
      objectFit: 'cover',
    },
    title: {},
    projectDetails: {
      margin: 32,
    },
    links: {
      '&>*': {
        marginRight: 16,
      },
    },
    projectScreenshotContainer: {},
    description: {},
  })
);

export interface ProjectItemProps {
  name: string;
  description: string;
  github: string;
  demo: string;
  imageUrl: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  const classes = useStyles();
  const { imageUrl, name, description } = props;
  return (
    <div className={classes.container}>
      <img
        src={imageUrl}
        alt={'project'}
        className={classes.projectScreenshot}
      />
      <Typography variant='h5' className={classes.title}>
        {name}
      </Typography>
      <div className={classes.links}>
        <Link href={'#'}>Demo</Link>
        <Link href={'#'}>Source</Link>
      </div>
      <Typography className={classes.description}>{description}</Typography>
    </div>
  );
}
