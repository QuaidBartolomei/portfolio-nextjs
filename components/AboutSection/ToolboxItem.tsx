import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ToolboxItemData } from 'data/toolboxData'
import React from 'react'

export type ToolboxItemProps = { tool: ToolboxItemData }

export default function ToolboxItem({ tool }: ToolboxItemProps) {
  const { name, Icon } = tool
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          mr: 0.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon />
        </Typography>
      </Box>
      <Typography variant="h6">{name}</Typography>
    </Box>
  )
}
