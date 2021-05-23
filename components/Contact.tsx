import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      '&>*': { margin: 10 },
    },
  })
);

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h4'>Contact Me</Typography>
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
    </div>
  );
}
