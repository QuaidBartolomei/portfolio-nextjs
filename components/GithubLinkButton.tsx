import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles(theme =>
  createStyles({
    GithubLinkButtonContainer: {
      // styles here
    },
  })
);

export default function GithubLinkButton() {
  const classes = useStyles();
  return (
    <IconButton className={classes.GithubLinkButtonContainer}>
      <GitHubIcon />
    </IconButton>
  );
}
