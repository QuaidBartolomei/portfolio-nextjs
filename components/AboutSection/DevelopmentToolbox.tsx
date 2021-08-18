import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import toolboxData from './toolboxData';
import ToolboxItem from './ToolboxItem';

const useStyles = makeStyles(theme =>
  createStyles({
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
    toolboxSection: {
      marginTop: theme.spacing(4),
      maxWidth: 400,
    },
  })
);

export default function DevelopmentToolbox() {
  const classes = useStyles();

  const Title = () => (
    <Typography variant='h4' align='center' paragraph>
      My Toolbox
    </Typography>
  );

  const Description = () => (
    <Typography paragraph align='center'>
      These are the frameworks and tools that I am most familiar with and have
      used to deploy websites.
    </Typography>
  );

  const Toolbox = () => (
    <Paper className={classes.container}>
      <Grid container spacing={1}>
        {toolboxData.map(tool => (
          <Grid item xs={6} key={tool.name}>
            <ToolboxItem tool={tool} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  return (
    <div className={classes.toolboxSection}>
      <Title />
      <Description />
      <Toolbox />
    </div>
  );
}
