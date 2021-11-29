import Container from '@mui/material/Container'
import React from 'react'
import AboutMe from './AboutMe'
import DevelopmentToolbox from './DevelopmentToolbox'

export default function AboutSection() {
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth="lg"
    >
      <AboutMe />
      <DevelopmentToolbox />
    </Container>
  )
}
