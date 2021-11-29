import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import toolboxData from '../../data/toolboxData'
import ToolboxItem from './ToolboxItem'

export default function DevelopmentToolbox() {
  const Title = () => (
    <Typography variant="h4" align="center" paragraph>
      My Toolbox
    </Typography>
  )

  const Description = () => (
    <Typography paragraph align="center">
      These are the frameworks and tools that I am most familiar with and have
      used to deploy websites.
    </Typography>
  )

  const Toolbox = () => (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 16,
        p: 1,
        width: '100%',
      }}
    >
      <Grid container spacing={1}>
        {toolboxData.map((tool) => (
          <Grid item xs={6} key={tool.name}>
            <ToolboxItem tool={tool} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )

  return (
    <Box
      sx={{
        maxWidth: 400,
      }}
    >
      <Title />
      <Description />
      <Toolbox />
    </Box>
  )
}
