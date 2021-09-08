import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import React from 'react';

export type IconLinkButtonProps = IconButtonProps & {
  icon: JSX.Element;
  href: string;
};

export function IconLinkButton(props: IconLinkButtonProps) {
  const { href, icon, ...buttonProps } = props;
  return (
    <Link
      href={href}
      sx={{
        color: 'primary.light',
      }}
    >
      <IconButton {...buttonProps} size='large'>
        {icon}
      </IconButton>
    </Link>
  );
}
