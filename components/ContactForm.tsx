import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const useStyles = makeStyles(theme =>
  createStyles({
    form: {
      width: '100%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  })
);
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
});

export default function ContactForm() {
  const classes = useStyles();
  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        id='name'
        label='Name'
        variant='outlined'
        name='Name'
        value={values.name}
        onChange={handleChange}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        id='message'
        label='Message'
        multiline
        rows={9}
        variant='outlined'
      />
      <Button
        variant='contained'
        color='primary'
        type='submit'
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </form>
  );
}
