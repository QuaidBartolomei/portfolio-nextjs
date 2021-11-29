import DoneIcon from '@mui/icons-material/Done'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

export type SubmitStatus = 'ready' | 'submitting' | 'done'

export default function SubmitButton({
  status = 'ready',
}: {
  status?: SubmitStatus
}) {
  const ReadyButton = () => (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      endIcon={<SendIcon />}
    >
      Send
    </Button>
  )

  const LoadingButton = () => (
    <Button
      variant="contained"
      endIcon={<CircularProgress />}
      color="primary"
      disabled
    >
      Sending...
    </Button>
  )

  const DoneButton = () => (
    <Button
      sx={{
        bgcolor: 'success.main',
      }}
      variant="contained"
      endIcon={<DoneIcon />}
      disabled
    >
      Email Sent
    </Button>
  )

  if (status === 'done') return <DoneButton />
  if (status === 'submitting') return <LoadingButton />

  return <ReadyButton />
}
