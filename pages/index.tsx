import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AnimatedLogo from 'components/AnimatedLogo';
import Separator from 'components/Separator';
import Projects from 'pages/projects';
import React from 'react';
import theme from 'pages/_theme';
import blueGrey from '@material-ui/core/colors/blueGrey';

const bg = [theme.palette.background.default, theme.palette.background.paper];
const backgroundColors = {
  hero: blueGrey[900],
  aboutSection: blueGrey[500],
};

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'inherit',
    },
    bg1: { background: bg[0] },
    bg2: { background: bg[1] },
    hero: { background: backgroundColors.hero },
    aboutSection: { background: backgroundColors.aboutSection },
  })
);

export default function index() {
  const classes = useStyles();

  const Intro = () => <AnimatedLogo />;
  const About = () => <div>This is the about section</div>;

  const pageSections = [Intro, About, Projects];
  const bgClasses = [classes.bg1, classes.bg2];

  return (
    <>
      <div className={classes.hero}>
        <Container className={classes.container} maxWidth='lg'>
          <Intro />
        </Container>
      </div>
      <Separator
        topColor={backgroundColors.hero}
        bottomColor={backgroundColors.aboutSection}
        type='zig-zag'
      />
      <div className={classes.aboutSection}>
        <Container className={classes.container} maxWidth='lg'>
          <About />
        </Container>
      </div>
    </>
  );
}
