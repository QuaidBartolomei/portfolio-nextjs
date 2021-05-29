import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&>*': {
        margin: theme.spacing(0.5),
      },
    },
    projectScreenshot: {
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
    root: {
      maxWidth: 345,
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
    <Card className={classes.root}
    raised
    >
      <CardActionArea>
        <CardMedia
          component='img'
          alt='CAB Clothing'
          height='240'
          image={imageUrl}
          title='CAB Clothing'
          className={classes.projectScreenshot}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
