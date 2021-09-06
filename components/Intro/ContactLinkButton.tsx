import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { scrollData } from 'utils/scrollTargets';

export default function ContactLinkButton() {
  const [selected, setSelected] = useState(false);
  const { target, offset } = scrollData.contact;
  return (
    <Link
      to={target}
      offset={offset}
      spy
      onSetActive={() => setSelected(true)}
      onSetInactive={() => setSelected(false)}
      smooth
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
