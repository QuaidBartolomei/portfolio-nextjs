import TextField from '@mui/material/TextField'
import { useFormikContext } from 'formik'
import React from 'react'
import { ContactFormData } from './contact.form'

export default function EmailField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<ContactFormData>()
  return (
    <TextField
      id="email"
      label="Email"
      variant="outlined"
      value={values.email}
      onChange={handleChange}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
  )
}
