import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: 100,
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography>
        &copy; Copyright {currentYear()}, Quaid Bartolomei
      </Typography>
    </div>
  );
}

const currentYear = () =>
  Math.floor(1970 + Date.now() / 1000 / 3600 / 24 / 365);
