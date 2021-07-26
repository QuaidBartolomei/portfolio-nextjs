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
