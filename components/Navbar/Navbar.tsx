import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import BrandLinkButton from './BrandLinkButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconLinkButton } from 'components/Navbar/IconLinkButton';
import ContactButton from './ContactButton';
import personalData from 'utils/personalData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      position: 'sticky',
    },
    buttons: {
      color: theme.palette.primary.light,
    },
    title: {
      flexGrow: 1,
    },
    background: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
  })
);

export type NavbarProps = {} & AppBarProps;

export function Navbar(props: NavbarProps) {
  const classes = useStyles();
  const { github, linkedin } = personalData;

  return (
    <AppBar className={classes.appbar} elevation={0} {...props}>
      <Container maxWidth='lg' disableGutters>
        <Toolbar>
          <div className={classes.title}>
            <BrandLinkButton />
          </div>
          <div className={classes.buttons}>
            <ContactButton />
            <IconLinkButton
              color='inherit'
              href={github}
              icon={<GitHubIcon />}
            />
            <IconLinkButton
              color='inherit'
              href={linkedin}
              icon={<LinkedInIcon />}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
