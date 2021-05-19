import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {},
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
        <Button color='inherit'>
          <Typography color='inherit' variant='h6'>
            qlb
          </Typography>
        </Button>
      </Link>
    </div>
  );

  const ToolbarLinks = () => (
    <Hidden xsDown>
      {links.map(link => (
        <Link href={link.href} passHref key={link.name}>
          <Button color='inherit'>{link.name}</Button>
        </Link>
      ))}
    </Hidden>
  );

  return (
    <div className={classes.root}>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <BrandLink />
          <ToolbarLinks />
          <MenuButton />
        </Toolbar>
        {showLinks && (
          <div className={classes.linksContainer}>
            <Link href='/projects'>Projects</Link>
          </div>
        )}
      </AppBar>
      <Toolbar />
    </div>
  );
}
