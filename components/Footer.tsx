import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: 180,
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <a href='https://storyset.com/online'>Online illustrations by Storyset</a>
    </div>
  );
}
