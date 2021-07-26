import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import React from 'react';
import { postData } from 'utils/fetch.util';
import {
  validationSchema,
  initialValues,
  ContactFormData,
} from './contact.form';
import EmailField from './EmailField';
import MessageField from './MessageField';
import NameField from './NameField';
import SubmitButton, { SubmitStatus } from './SubmitButton';

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

export default function ContactForm() {
  const classes = useStyles();
  const [submitState, setSubmitState] = React.useState<SubmitStatus>('ready');

  const onSubmit = async (values: ContactFormData) => {
    setSubmitState('submitting');
    const res = await postData(values);
    if (res.status === 200) setSubmitState('done');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <NameField />
        <EmailField />
        <MessageField />
        <SubmitButton status={submitState} />
      </Form>
    </Formik>
  );
}
