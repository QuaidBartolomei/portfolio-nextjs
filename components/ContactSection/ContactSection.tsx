import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm/ContactForm';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      paddingBottom: theme.spacing(6),
    },
    title: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
    },
  })
);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <Element name='contact'>
      <Container className={classes.container} maxWidth='xs'>
        <Typography
          align='center'
          className={classes.title}
          paragraph
          variant='h4'
        >
          Contact Me
        </Typography>
        <Typography paragraph align='center' variant='subtitle2'>
          Send me a message with your name and email address and I will email
          you a response.
        </Typography>
        <ContactForm />
      </Container>
    </Element>
  );
}
