import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'
import { scrollData } from 'utils/scrollTargets'
import ContactForm from './ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <Container component="section" maxWidth="xs" id={scrollData.contact.target}>
      <Typography
        align="center"
        sx={{
          mb: 2,
        }}
        paragraph
        variant="h4"
      >
        Contact Me
      </Typography>
      <Typography paragraph align="center" variant="subtitle2">
        Interested in working with me? Send me a message with your name and
        email address and I will email you a response.
      </Typography>
      <ContactForm />
    </Container>
  )
}
