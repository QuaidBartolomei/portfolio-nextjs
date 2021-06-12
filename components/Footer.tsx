import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
        Free SVG Background by
        {' '}
        <Link target='_blank' href='https://bgjar.com'>
          BGJar
        </Link>
      </Typography>
    </div>
  );
}
