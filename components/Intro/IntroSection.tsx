import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import personalData from 'utils/personalData';
import Background from './Background';
import ContactLinkButton from './ContactLinkButton';
import ProjectsLinkButton from './ProjectsLinkButton';

const useStyles = makeStyles(theme =>
  createStyles({
    introSection: {
      height:'100vh',
      width: '100%',
    },
    introSectionContent: {
      zIndex: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: theme.palette.primary.contrastText,
    },
    contentContainer: {
      height:'100vh',
      width: '100vw',
      position: 'fixed',
    },
    buttonsContainer: {
      display: 'flex',
      marginTop: theme.spacing(2),
      flexDirection: 'row',
      alignItems: 'center',
      '&>*': {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      justifyContent: 'center',
    },
  })
);

export default function IntroSection() {
  const classes = useStyles();
  const { name } = personalData;

  return (
    <section className={classes.introSection}>
      <Background />
      <div className={classes.contentContainer}>
        <Container className={classes.introSectionContent}>
          <Typography variant='h4'>{name}</Typography>
          <Typography paragraph variant='subtitle1'>
            Full Stack Web Developer
          </Typography>
          <div className={classes.buttonsContainer}>
            <ProjectsLinkButton />
            <ContactLinkButton />
          </div>
        </Container>
      </div>
    </section>
  );
}
