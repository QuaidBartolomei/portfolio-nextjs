import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme =>
  createStyles({
    projectScreenshot: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover',
      maxWidth: 320,
      borderRadius: 4,
    },
    title: {},
    details: {
      display: 'flex',
      maxWidth: 320,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    links: {
      padding: 0,
    },
    description: {
      flexGrow: 1,
    },
    root: {
      padding: theme.spacing(1),
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
    <Card className={classes.root}>
      <Grid container>
        <Grid
          xs={12}
          sm={6}
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <CardMedia
            component='img'
            alt='CAB Clothing'
            height='240'
            image={imageUrl}
            title='CAB Clothing'
            className={classes.projectScreenshot}
          />
        </Grid>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
          item
          xs={12}
          sm={6}
        >
          <div className={classes.details}>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography
              className={classes.description}
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {description}
            </Typography>
          </div>
          <CardActions className={classes.links}>
            <Button size='small' color='primary' endIcon={<PublicIcon />}>
              Live Demo
            </Button>
            <Button size='small' color='primary' endIcon={<GitHubIcon />}>
              Source Code
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
