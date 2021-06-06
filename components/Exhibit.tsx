import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.main,
      borderRadius: 64,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
      },
      [theme.breakpoints.up('sm')]: {
        height: 180,
        borderTopRightRadius: 0,
      },
    },
    text: {},
    textContainer: {
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    image: {
      height: 320,
      margin: theme.spacing(1),
    },
  })
);

export default function Exhibit() {
  const classes = useStyles();
  
  return (
    <Container className={classes.container} maxWidth='md'>
      <div className={classes.textContainer}>
        <Typography variant='h4' className={classes.text}>
          Responsive websites for any device
        </Typography>
      </div>
      <img src='Responsive-amico.svg' className={classes.image} />
    </Container>
  );
}
