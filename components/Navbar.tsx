import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';
import AnimatedLogo from './AnimatedLogo';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {},
    brandLinkButton: {
      textTransform: 'none',
      padding: 0,
    },
    title: {
      flexGrow: 1,
    },
    linksContainer: {},
  })
);

export default function Navbar() {
  const classes = useStyles();

  const BrandLink = () => (
    <div className={classes.title}>
      <Button
        onClick={animateScroll.scrollToTop}
        color='inherit'
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
    </div>
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

  return (
    <AppBar position='fixed' elevation={0} color='transparent'>
      <Container maxWidth='lg'>
        <Toolbar>
          <BrandLink />
          <ContactLinkButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
