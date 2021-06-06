import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import React from 'react';

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
      objectFit: 'cover',
      border: 'thin black solid',
      maxWidth: width,
    },
    title: {},
    imageContainer: {
      width,
      maxWidth: width,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width,
      maxWidth: width,
      flexGrow: 1,
      hyphens: 'none',
    },
    links: {
      padding: 0,
      marginTop:theme.spacing(2)
    },
    description: {
      flexGrow: 1,
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
  const {
    imageUrl,

    name,
    technologiesUsed,

    description,
  } = props;

  const ProjectImage = () => (
    <CardMedia
      component='img'
      alt={`${name} example screenshot`}
      height='240'
      image={imageUrl}
      title='CAB Clothing'
      className={classes.projectScreenshot}
    />
  );

  const Details = () => {
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
      <>
        <Title />
        <TechnologiesUsed />
        <Description />
        <Links />
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <Grid container spacing={spacing} className={classes.grid}>
        <Grid item className={classes.imageContainer} xs={12} md={6}>
          <ProjectImage />
        </Grid>
        <Grid xs={12} md={6} item className={classes.details}>
          <Details />
        </Grid>
      </Grid>
    </Card>
  );
}
