import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Form, Formik, useFormik, useFormikContext } from 'formik';
import React from 'react';
import * as yup from 'yup';
import SubmitButton from './SubmitButton';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function postData<T>(data: T) {
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

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
  message: yup
    .string()
    .min(50, 'Message should be of minimum 50 characters length')
    .required('message is required'),
});

export default function ContactForm() {
  const classes = useStyles();

  const [submitState, setSubmitState] =
    React.useState<'ready' | 'sending' | 'done'>('ready');

  return (
    <Formik
      initialValues={{ email: '', name: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        const res = await postData(values);
        if (res.status === 200) console.log('Response succeeded!');
      }}
    >
      <Form className={classes.form}>
        <NameField />
        <EmailField />
        <MessageField />
        <SubmitButton />
      </Form>
    </Formik>
  );
}

function NameField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<FormData>();
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

function EmailField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<FormData>();
  return (
    <TextField
      id='email'
      label='Email'
      variant='outlined'
      value={values.email}
      onChange={handleChange}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
  );
}

function MessageField() {
  const { values, handleChange, touched, errors } =
    useFormikContext<FormData>();
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
