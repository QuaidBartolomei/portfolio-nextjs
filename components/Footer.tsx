import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: 100,
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    </div>
  );
}
