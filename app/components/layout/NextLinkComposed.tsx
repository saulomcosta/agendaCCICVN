// components/NextLinkComposed.tsx
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';
import MuiLink from '@mui/material/Link';

type NextLinkComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  NextLinkProps & {
    linkAs?: NextLinkProps[ 'as' ];
    href: NextLinkProps[ 'href' ];
  };

const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLinkComposed ( props, ref )
  {
    const {
      as,
      href,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      ...other
    } = props;

    return (
      <NextLink
        href={href}
        as={as}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        passHref
        legacyBehavior
      >
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

export default NextLinkComposed;
