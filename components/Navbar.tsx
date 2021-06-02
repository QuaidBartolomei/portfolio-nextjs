import { useScrollTrigger } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import { useSpring } from '@react-spring/core';
import React, { useState } from 'react';
import { animateScroll, Link } from 'react-scroll';
import { animated } from 'react-spring';

const brandLinkCircleSize = 58;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {},
    brandLinkButton: {
      textTransform: 'none',
      height: brandLinkCircleSize,
      width: brandLinkCircleSize,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
    },
    title: {
      flexGrow: 1,
    },
    linksContainer: {},
    background: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
    brandLinkButtonContainer: {
      height: brandLinkCircleSize,
      width: brandLinkCircleSize,
      borderRadius: brandLinkCircleSize,
      border: 'thin solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export enum PageAnchors {
  contact = 'contact',
  projects = 'projects',
}

export default function Navbar() {
  const classes = useStyles();

  const BrandLink = () => (
    <Button
      onClick={animateScroll.scrollToTop}
      className={classes.brandLinkButton}
    >
      <Typography
        color='inherit'
        variant='h6'
        style={{ width: '100%', height: '100%' }}
      >
        qlb
      </Typography>
    </Button>
  );

  const NavLink = () => (
    <Link to='contact' spy={true} smooth={true}>
      <Button>Projects</Button>
    </Link>
  );

  const ContactLinkButton = () => {
    const [selected, setSelected] = useState(false);
    return (
      <Link
        to='contact'
        spy={true}
        onSetActive={() => setSelected(true)}
        onSetInactive={() => setSelected(false)}
        smooth={true}
      >
        <Button
          variant='contained'
          endIcon={selected ? <DraftsIcon /> : <MailIcon />}
        >
          Contact
        </Button>
      </Link>
    );
  };

  const scrollTrigger = useScrollTrigger();
  const spring = useSpring({
    opacity: scrollTrigger ? 1 : 0,
  });

  return (
    <AppBar position='fixed' elevation={0} color='transparent'>
      <animated.div className={classes.background} style={spring} />
      <Container maxWidth='lg' disableGutters>
        <Toolbar>
          <div className={classes.title}>
            <BrandLink />
          </div>
          <ContactLinkButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
