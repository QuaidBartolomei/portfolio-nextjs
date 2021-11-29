import DraftsIcon from '@mui/icons-material/Drafts'
import MailIcon from '@mui/icons-material/Mail'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-scroll'
import { scrollData } from 'utils/scrollTargets'

export type ContactIconLinkButtonProps = {
  // props
}

export default function ContactIconLinkButton({}: ContactIconLinkButtonProps) {
  const [selected, setSelected] = React.useState(false)
  const { target, offset } = scrollData.contact
  return (
    <Link
      to={target}
      offset={offset}
      spy
      onSetActive={() => setSelected(true)}
      onSetInactive={() => setSelected(false)}
      smooth
    >
      <IconButton color="inherit" size="large">
        {selected ? <DraftsIcon /> : <MailIcon />}
      </IconButton>
    </Link>
  )
}
