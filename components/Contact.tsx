import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'relative',
      backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing(4),
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight:'100vh',
      paddingBottom: theme.spacing(2),
    },
    form: {
      width: '100%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    title:{
    }
  })
);

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container className={classes.container} maxWidth='lg'>
        <Typography
        className={classes.title}
      paragraph
        variant='h4'>Contact Me</Typography>
        <form className={classes.form}>
          <TextField id='outlined-basic' label='Name' variant='outlined' />
          <TextField id='outlined-basic' label='Email' variant='outlined' />
          <TextField
            id='outlined-multiline-static'
            label='Message'
            multiline
            rows={9}
            variant='outlined'
          />
          <Button variant='contained' color='primary' endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
}
