import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme =>
  createStyles({
    IconLinkButtonContainer: {
      // styles here
    },
  })
);

export type IconLinkButtonProps = {
  icon: JSX.Element;
  onClick?: () => void;
  href: string;
};

export function IconLinkButton(props: IconLinkButtonProps) {
  const { href, icon, ...buttonProps } = props;

  const classes = useStyles();
  return (
    <Link href={href}>
      <IconButton {...buttonProps}>{icon}</IconButton>
    </Link>
  );
}
