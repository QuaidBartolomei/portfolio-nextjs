import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import scrollTargets from 'utils/scrollTargets';
import ContactForm from './ContactForm/ContactForm';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <Container
      component='section'
      className={classes.container}
      maxWidth='xs'
      id={scrollTargets.contact}
    >
      <Typography
        align='center'
        className={classes.title}
        paragraph
        variant='h4'
      >
        Contact Me
      </Typography>
      <Typography paragraph align='center' variant='subtitle2'>
        Interested in working with me? Send me a message with your name and
        email address and I will email you a response.
      </Typography>
      <ContactForm />
    </Container>
  );
}
