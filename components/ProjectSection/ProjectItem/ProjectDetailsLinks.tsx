import GitHubIcon from '@mui/icons-material/GitHub'
import PublicIcon from '@mui/icons-material/Public'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { ProjectData } from 'data/projectData'
import React from 'react'

export type ProjectDetailsLinksProps = {
  projectData: ProjectData
}

export default function ProjectDetailsLinks({
  projectData,
}: ProjectDetailsLinksProps) {
  const { liveDemoUrl, githubUrl } = projectData

  const linkData = [
    {
      href: liveDemoUrl,
      startIcon: <PublicIcon />,
      label: 'Live Demo',
    },
    {
      href: githubUrl,
      startIcon: <GitHubIcon />,
      label: 'Source Code',
    },
  ]

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={1}
      sx={{
        padding: 0,
        mt: 2,
      }}
    >
      {linkData.map((props, key) => (
        <LinkButton key={key} {...props} />
      ))}
    </Stack>
  )
}

type LinkButtonProps = {
  href: string
  startIcon: React.ReactNode
  label: string
}

const LinkButton = ({ href, startIcon, label }: LinkButtonProps) => (
  <Link href={href}>
    <Button
      size="small"
      variant="outlined"
      color="primary"
      startIcon={startIcon}
    >
      {label}
    </Button>
  </Link>
)
