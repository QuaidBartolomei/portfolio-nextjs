import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { IconType } from 'react-icons';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiFirebase,
  SiHeroku,
  SiMaterialUi,
  SiMongodb,
  SiNextDotJs,
  SiReact,
  SiSocketDotIo,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si';

const size = 32;

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      height: size,
      width: size,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
    },
    container: {
      display: 'flex',
      textAlign: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 16,
      padding: theme.spacing(1),
      width: '100%',
      '&>*': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    techItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      marginRight: theme.spacing(0.5),
    },
  })
);

type ToolboxItemData = { Icon: IconType; name: string };

const tech = [
  { Icon: SiReact, name: 'React' },
  { Icon: SiTypescript, name: 'Typescript' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiSocketDotIo, name: 'Socket.io' },
  { Icon: SiMaterialUi, name: 'Material-UI' },
  { Icon: SiNextDotJs, name: 'Next.js' },
  { Icon: SiHeroku, name: 'Heroku' },
  { Icon: IoLogoVercel, name: 'Vercel' },
  { Icon: SiFirebase, name: 'Firebase' },
  { Icon: SiStorybook, name: 'Storybook' },
];

function ToolboxItem({ tool }: { tool: ToolboxItemData }) {
  const classes = useStyles();
  const { name, Icon } = tool;
  return (
    <div className={classes.techItem}>
      <div className={classes.iconContainer}>
        <Typography variant='h6' className={classes.icon}>
          <Icon />
        </Typography>
      </div>
      <Typography variant='h6'>{name}</Typography>
    </div>
  );
}

export default function TechShowcase() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid container spacing={1}>
        {tech.map(tool => (
          <Grid item xs={6} key={tool.name}>
            <ToolboxItem tool={tool} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
