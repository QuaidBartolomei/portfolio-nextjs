import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

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

export type SubmitStatus = 'ready' | 'submitting' | 'done';

export default function SubmitButton({
  status = 'ready',
}: {
  status?: SubmitStatus;
}) {
  const classes = useStyles();

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

  if (status === 'done') return <DoneButton />;
  if (status === 'submitting') return <LoadingButton />;

  return <ReadyButton />;
}
