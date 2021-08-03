import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { IconButtonProps } from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      color:theme.palette.primary.light
    },
  })
);

export type IconLinkButtonProps = IconButtonProps & {
  icon: JSX.Element;
  onClick?: () => void;
  href: string;
};

export function IconLinkButton(props: IconLinkButtonProps) {
  const { href, icon, ...buttonProps } = props;
  const classes = useStyles();

  return (
    <Link href={href}
    className={classes.container}
    >
      <IconButton {...buttonProps}>{icon}</IconButton>
    </Link>
  );
}
