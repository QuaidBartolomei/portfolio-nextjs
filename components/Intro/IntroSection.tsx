import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { scroller } from 'react-scroll';
import personalData from 'utils/personalData';
import scrollTargets from 'utils/scrollTargets';
import Background from './Background';
import ContactLinkButton from './ContactLinkButton';

const height = '100vh';

const useStyles = makeStyles(theme =>
  createStyles({
    introSection: {
      height,
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
  const { name } = personalData;

  function ViewProjectsButton() {
    const scrollToProjects = () =>
      scroller.scrollTo(scrollTargets.projects, {
        smooth: true,
      });
    return (
      <Button variant='contained' color='primary' onClick={scrollToProjects}>
        View My Work
      </Button>
    );
  }

  return (
    <div className={classes.introSection}>
      <Background />
      <div className={classes.contentContainer}>
        <Container className={classes.introSectionContent}>
          <Typography variant='h4'>{name}</Typography>
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
