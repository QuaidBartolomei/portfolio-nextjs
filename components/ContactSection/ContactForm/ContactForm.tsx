import Stack from '@mui/material/Stack'
import { Form, Formik } from 'formik'
import React from 'react'
import { postData } from 'utils/fetch.util'
import {
  ContactFormData,
  initialValues,
  validationSchema,
} from './contact.form'
import EmailField from './EmailField'
import MessageField from './MessageField'
import NameField from './NameField'
import SubmitButton, { SubmitStatus } from './SubmitButton'

export default function ContactForm() {
  const [submitState, setSubmitState] = React.useState<SubmitStatus>('ready')

  const onSubmit = async (values: ContactFormData) => {
    setSubmitState('submitting')
    const res = await postData(values)
    if (res.status === 200) setSubmitState('done')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Stack
        component={Form}
        sx={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
        }}
        spacing={2}
      >
        <NameField />
        <EmailField />
        <MessageField />
        <SubmitButton status={submitState} />
      </Stack>
    </Formik>
  )
}
