import IconButton from '@material-ui/core/IconButton';
import DraftsIcon from '@material-ui/icons/Drafts';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { IconLinkButton } from 'components/IconLinkButton';
import React from 'react';
import { Link } from 'react-scroll';

export default function ContactButtons() {
  const [selected, setSelected] = React.useState(false);

  function MailButton() {
    return (
      <Link
        to='contact'
        spy={true}
        onSetActive={() => setSelected(true)}
        onSetInactive={() => setSelected(false)}
        smooth={true}
      >
        <IconButton>{selected ? <DraftsIcon /> : <MailIcon />}</IconButton>
      </Link>
    );
  }

  function GitHubButton() {
    return <IconLinkButton href={'#'} icon={<GitHubIcon />} />;
  }

  function LinkedInButton() {
    return <IconLinkButton href={'#'} icon={<LinkedInIcon />} />;
  }

  return (
    <>
      <MailButton />
      <GitHubButton />
      <LinkedInButton />
    </>
  );
}
