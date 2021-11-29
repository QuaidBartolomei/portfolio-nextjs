import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import React from 'react'
import { ProjectData } from 'data/projectData'

export type ProjectItemThumbnailProps = {
  project: ProjectData
}

export default function ProjectItemThumbnail({
  project,
}: ProjectItemThumbnailProps) {
  const { screenshotPath: localScreenshot, name, liveDemoUrl } = project

  return (
    <Link href={liveDemoUrl}>
      <Paper
        sx={{
          height: 180,
          width: 320,
        }}
      >
        <Image src={localScreenshot} alt={name} height={180} width={320} />
      </Paper>
    </Link>
  )
}
