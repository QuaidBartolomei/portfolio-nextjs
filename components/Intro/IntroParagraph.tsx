import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import ContactLinkButton from 'components/ContactLinkButton';

const useStyles = makeStyles(theme =>
  createStyles({
    IntroParagraphContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
    },
    text: {
      marginBottom: theme.spacing(2),
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '&>*': {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      justifyContent: 'center',
    },
  })
);

export default function IntroParagraph() {
  const classes = useStyles();
  return (
    <div className={classes.IntroParagraphContainer}>
      <Typography className={classes.text} variant='subtitle1'>
        Full Stack Web Developer
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button variant='contained' color='secondary'>
          View My Work
        </Button>
        <ContactLinkButton />
      </div>
    </div>
  );
}
