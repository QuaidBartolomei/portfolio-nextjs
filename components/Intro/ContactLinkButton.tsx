import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme =>
  createStyles({
    ContactLinkButtonContainer: {
      // styles here
    },
  })
);

export default function ContactLinkButton() {
  const [selected, setSelected] = useState(false);
  return (
    <Link
      to='contact'
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
