import React from 'react';
import styled from 'styled-components';
import { lineHeight, padding } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Link, { LinkProps } from '../Link';
import Text from '../Text';

// TODO: Finish variant implementation

export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
  href?: string;
  className?: string;
  label: string;
  linkComponent?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> &
      Pick<LinkProps, 'variant' | 'children'> & { href: string }
  ) => JSX.Element;
}

export const BreadcrumbsItem = styled(
  ({
    href,
    label,
    className,
    variant,
    linkComponent: LinkComponent = Link,
  }: BreadcrumbsItemProps) => (
    <li className={className}>
      {href ? (
        <LinkComponent href={href} title={label} variant={variant}>
          {label}
        </LinkComponent>
      ) : (
        <Text inline bold>
          {label}
        </Text>
      )}
    </li>
  )
)`
  position: relative;
  ${({ theme }) => padding({ theme, pl: 3, pr: 3 })}
  ${({ theme }) => lineHeight({ theme, lineHeight: 3 })}
  margin-right: -2px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    bottom: 50%;
    left: 0;
    margin-bottom: -6px;
    border-top: 0.333rem solid transparent;
    border-bottom: 0.333rem solid transparent;
    border-left: 0.333rem solid
      ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  }

  &:first-child {
    padding-left: 0;

    &:after {
      display: none;
    }
  }

  &:last-child {
    padding-right: 0;
  }
`;

const BreadcrumbsList = styled.ul`
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const Breadcrumbs: React.FC = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbsList>{children}</BreadcrumbsList>
    </nav>
  );
};

export default Breadcrumbs;
