import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Projects from 'pages/projects';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    parent: {
      minHeight: '100vh',
      width: '100%',
    },
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg1: { background: theme.palette.background.default },
    bg2: { background: theme.palette.background.paper },
  })
);

export default function index() {
  const classes = useStyles();

  const Intro = () => <div>Hello World</div>;
  const About = () => <div>This is the about section</div>;

  const pageSections = [Intro, About, Projects];
  const bgClasses = [classes.bg1, classes.bg2];

  return (
    <>
      {pageSections.map((Section, key) => (
        <div key={key} className={`${classes.parent} ${bgClasses[key % 2]}`}>
          <Container
            className={`${classes.container} ${bgClasses[key % 2]}`}
            maxWidth='lg'
          >
            <Section />
          </Container>
        </div>
      ))}
    </>
  );
}
