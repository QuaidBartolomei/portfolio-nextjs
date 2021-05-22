import AppBar from '@material-ui/core/AppBar';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {},
    brandLinkButton: {
      textTransform: 'none',
    },
    title: {
      flexGrow: 1,
    },
    linksContainer: {},
  })
);

export default function Navbar() {
  const classes = useStyles();
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const MenuButton = () => (
    <Hidden smUp>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={toggleShowLinks}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );

  const links = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const BrandLink = () => (
    <div className={classes.title}>
      <Link passHref href='/'>
        <Button color='inherit' className={classes.brandLinkButton}>
          <Typography color='inherit' variant='h6'>
            qlb
          </Typography>
        </Button>
      </Link>
    </div>
  );

  const ContactLinkButton = () => (
    <Link href={'/contact'} passHref>
      <Button variant='contained' endIcon={<MailIcon />}>
        Contact
      </Button>
    </Link>
  );

  return (
    <>
      <AppBar position='fixed' elevation={0} color='transparent'>
        <Container maxWidth='lg'>
          <Toolbar>
            <BrandLink />
            <ContactLinkButton />
            <MenuButton />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
