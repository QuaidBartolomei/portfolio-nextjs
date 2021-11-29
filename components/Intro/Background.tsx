import Box from '@mui/material/Box'
import React from 'react'

export type BackgroundProps = {
  // props
}

export default function Background({}: BackgroundProps) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          backgroundImage: 'url(hexagon.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          zIndex: -1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </>
  )
}
