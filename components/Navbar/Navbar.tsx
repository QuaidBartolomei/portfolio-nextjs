import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { IconLinkButton } from 'components/IconLinkButton'
import personalData from 'data/personalData'
import React from 'react'
import BrandLinkButton from './BrandLinkButton'
import ContactIconLinkButton from './ContactIconLinkButton'

export type NavbarProps = {} & AppBarProps

export function Navbar({ sx, ...otherProps }: NavbarProps) {
  const { github, linkedin } = personalData
  return (
    <AppBar
      sx={{
        bgcolor: 'primary.dark',
        position: 'sticky',
        ...sx,
      }}
      {...otherProps}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <BrandLinkButton />
          </Box>
          <Box
            sx={{
              color: 'primary.light',
            }}
          >
            <ContactIconLinkButton />
            <IconLinkButton
              color="inherit"
              href={github}
              icon={<GitHubIcon />}
            />
            <IconLinkButton
              color="inherit"
              href={linkedin}
              icon={<LinkedInIcon />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
