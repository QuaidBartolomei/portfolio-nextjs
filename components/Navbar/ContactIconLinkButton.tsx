import IconButton from '@material-ui/core/IconButton';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import { theme } from 'pages/_theme';
import React from 'react';
import { Link } from 'react-scroll';
import scrollTargets from 'utils/scrollTargets';

export type ContactIconLinkButtonProps = {
  // props
};

export default function ContactIconLinkButton({}: ContactIconLinkButtonProps) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Link
      to={scrollTargets.contact}
      spy
      onSetActive={() => setSelected(true)}
      onSetInactive={() => setSelected(false)}
      smooth
      offset={-theme.spacing(10)}
    >
      <IconButton color='inherit'>
        {selected ? <DraftsIcon /> : <MailIcon />}
      </IconButton>
    </Link>
  );
}
