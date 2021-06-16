import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useFormikContext } from 'formik';
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles(theme =>
  createStyles({
    SubmitButtonContainer: {
      // styles here
    },
    doneButton: {
      backgroundColor: theme.palette.success.main,
    },
  })
);

export default function SubmitButton() {
  const classes = useStyles();

  const form = useFormikContext();

  const ReadyButton = () => (
    <Button
      variant='contained'
      color='primary'
      type='submit'
      endIcon={<SendIcon />}
    >
      Send
    </Button>
  );

  const LoadingButton = () => (
    <Button
      variant='contained'
      endIcon={<CircularProgress />}
      color='primary'
      disabled
    >
      Sending...
    </Button>
  );

  const DoneButton = () => (
    <Button
      className={classes.doneButton}
      variant='contained'
      endIcon={<DoneIcon />}
      disabled
    >
      Email Sent
    </Button>
  );

  if (form.submitCount > 0) return <DoneButton />;
  if (form.isSubmitting) return <LoadingButton />;

  return <DoneButton />;
}
