import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ToolboxItemData } from './toolboxData';


const useStyles = makeStyles(theme =>
  createStyles({
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

export type ToolboxItemProps = { tool: ToolboxItemData };

export default function ToolboxItem({ tool }: ToolboxItemProps) {
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
