import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import { scroller } from 'react-scroll';

const useStyles = makeStyles(theme =>
  createStyles({
    ContactButtonsContainer: {
      // styles here
    },
  })
);

export default function ContactButtons() {
  const classes = useStyles();
  type ButtonData = {
    icon: JSX.Element;
    onClick?: () => void;
    href: string;
  };

  const buttonData: ButtonData[] = [
    {
      icon: <GitHubIcon />,
      href: '',
    },
    {
      icon: <LinkedInIcon />,
      href: '',
    },
  ];

  function MailButton() {
    return (
      <IconButton
        onClick={() => {
          scroller.scrollTo('contact', {
            smooth: true,
          });
        }}
      >
        <MailIcon />
      </IconButton>
    );
  }

  function ContactButton({ icon, href, ...props }: ButtonData) {
    return (
      <Link href={href}>
        <IconButton {...props}>{icon}</IconButton>
      </Link>
    );
  }

  return (
    <>
      <MailButton />
      {buttonData.map(data => (
        <ContactButton {...data} />
      ))}
    </>
  );
}
