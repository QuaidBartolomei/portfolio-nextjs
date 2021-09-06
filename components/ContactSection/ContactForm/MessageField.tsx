import TextField from '@mui/material/TextField';
import { useFormikContext } from 'formik';
import React from 'react';
import { ContactFormData } from './contact.form';

export default function MessageField() {
  const {
    values,
    handleChange,
    touched,
    errors,
  } = useFormikContext<ContactFormData>();
  return (
    <TextField
      id='message'
      label='Message'
      name='message'
      multiline
      rows={9}
      variant='outlined'
      value={values.message}
      onChange={handleChange}
      error={touched.message && Boolean(errors.message)}
      helperText={touched.message && errors.message}
    />
  );
}
