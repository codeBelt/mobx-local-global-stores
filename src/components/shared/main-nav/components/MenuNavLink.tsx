import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const { href, replace, scroll, passHref, shallow, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} replace={replace} scroll={scroll} shallow={shallow} passHref={passHref}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.displayName = 'NextComposed';

export const MenuNavLink: React.FC<NextLinkProps> = (props) => {
  return <NextComposed {...props} />;
};
