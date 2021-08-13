import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { scroller } from 'react-scroll';
import ContactLinkButton from './ContactLinkButton';

const height = '100vh';

const useStyles = makeStyles(theme =>
  createStyles({
    introSection: {
      height,
      width: '100%',
    },
    background: {
      position: 'fixed',
      backgroundImage: 'url(hexagon.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height,
      width: '100vw',
      zIndex: -2,
    },
    backgroundOverlay: {
      zIndex: -1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    introSectionContent: {
      zIndex: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: theme.palette.primary.contrastText,
      '&>*': {},
    },
    contentContainer: {
      height,
      width: '100vw',
      position: 'fixed',
    },

    text: {
      marginBottom: theme.spacing(2),
    },
    buttonsContainer: {
      display: 'flex',
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

  function ViewProjectsButton() {
    const scrollToProjects = () =>
      scroller.scrollTo('projects', {
        smooth: true,
      });
    return (
      <Button variant='contained' color='secondary' onClick={scrollToProjects}>
        View My Work
      </Button>
    );
  }

  return (
    <div className={classes.introSection}>
      <div className={classes.background} />
      <div className={classes.backgroundOverlay} />
      <div className={classes.contentContainer}>
        <Container className={classes.introSectionContent}>
          <Typography variant='h4'>Quaid Bartolomei</Typography>
          <Typography paragraph className={classes.text} variant='subtitle1'>
            Full Stack Web Developer
          </Typography>
          <div className={classes.buttonsContainer}>
            <ViewProjectsButton />
            <ContactLinkButton />
          </div>
        </Container>
      </div>
    </div>
  );
}
