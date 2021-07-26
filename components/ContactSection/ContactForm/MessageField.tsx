import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { ContactFormData } from './contact.form';

const useStyles = makeStyles(theme =>
  createStyles({
    EmailFieldContainer: {
      // styles here
    },
  })
);

export default function MessageField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<ContactFormData>();
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
