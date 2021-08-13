import IconButton from '@material-ui/core/IconButton';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import { Link } from 'react-scroll';
import scrollTargets from 'utils/scrollTargets';

export type ContactButtonProps = {
  // props
};

export default function ContactButton({}: ContactButtonProps) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Link
      to={scrollTargets.contact}
      spy
      onSetActive={() => setSelected(true)}
      onSetInactive={() => setSelected(false)}
      smooth
    >
      <IconButton color='inherit'>
        {selected ? <DraftsIcon /> : <MailIcon />}
      </IconButton>
    </Link>
  );
}
