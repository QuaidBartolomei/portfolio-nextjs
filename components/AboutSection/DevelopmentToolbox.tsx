import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import toolboxData from './toolboxData';
import ToolboxItem from './ToolboxItem';

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
  })
);

export default function DevelopmentToolbox() {
  const classes = useStyles();

  return (
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
}
