import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm/ContactForm';

const useStyles = makeStyles(theme =>
  createStyles({
    background: {
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      paddingBottom: theme.spacing(2),
    },
    title: {
      marginTop: theme.spacing(4),
    },
  })
);

export default function Contact() {
  const classes = useStyles();
  return (
    <Element name='contact' className={classes.background}>
      <Container className={classes.container} maxWidth='lg'>
        <Typography className={classes.title} paragraph variant='h4'>
          Contact Me
        </Typography>
        <ContactForm />
      </Container>
    </Element>
  );
}
