import Button from '@material-ui/core/Button';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import { theme } from 'pages/_theme';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import scrollTargets from 'utils/scrollTargets';

export default function ContactLinkButton() {
  const [selected, setSelected] = useState(false);
  return (
    <Link
      to={scrollTargets.contact}
      spy
      onSetActive={() => setSelected(true)}
      onSetInactive={() => setSelected(false)}
      smooth
      offset={-theme.spacing(10)}
    >
      <Button
        variant='contained'
        endIcon={selected ? <DraftsIcon /> : <MailIcon />}
        color='secondary'
      >
        Contact
      </Button>
    </Link>
  );
}
