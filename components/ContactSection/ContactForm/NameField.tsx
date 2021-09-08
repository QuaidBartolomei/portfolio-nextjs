import TextField from '@mui/material/TextField';
import { useFormikContext } from 'formik';
import React from 'react';
import { ContactFormData } from './contact.form';

export default function NameField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<ContactFormData>();
  return (
    <TextField
      id='name'
      label='Name'
      variant='outlined'
      name='name'
      value={values.name}
      onChange={handleChange}
      error={touched.name && Boolean(errors.name)}
      helperText={touched.name && errors.name}
    />
  );
}
