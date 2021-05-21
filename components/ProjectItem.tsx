import { ButtonBase } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
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
      height: 200,
      width: 320,
      margin: theme.spacing(1),
      border: 'solid thin black',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover',
    },
    title: {},
    projectDetails: {},
    links: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'space-evenly',
      width: 200,
      justifyContent: 'space-evenly',
    },
    description: {
      width: 300,
    },
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
      <ButtonBase
        className={classes.projectScreenshot}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
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
