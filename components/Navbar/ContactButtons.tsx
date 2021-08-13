import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconLinkButton } from 'components/Navbar/IconLinkButton';
import React from 'react';
import ContactButton from './ContactButton';

export default function ContactButtons() {
  function GitHubButton() {
    return <IconLinkButton color='inherit' href={'#'} icon={<GitHubIcon />} />;
  }

  function LinkedInButton() {
    return (
      <IconLinkButton color='inherit' href={'#'} icon={<LinkedInIcon />} />
    );
  }

  return (
    <>
      <ContactButton />
      <GitHubButton />
      <LinkedInButton />
    </>
  );
}
