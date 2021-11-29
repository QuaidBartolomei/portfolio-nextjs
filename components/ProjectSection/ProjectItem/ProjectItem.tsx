import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import React from 'react'
import { ProjectData } from 'data/projectData'
import { theme } from 'utils/theme'
import ProjectDetails from './ProjectDetails'
import ProjectItemThumbnail from './ProjectItemThumbnail'

export interface ProjectItemProps {
  projectData: ProjectData
}

export default function ProjectItem(props: ProjectItemProps) {
  const { projectData } = props

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      spacing={1}
    >
      <ProjectItemThumbnail project={projectData} />
      <Box
        sx={{
          padding: 1,
          [theme.breakpoints.up('sm')]: {
            width: 320,
          },
        }}
      >
        <ProjectDetails projectData={projectData} />
      </Box>
    </Stack>
  )
}
