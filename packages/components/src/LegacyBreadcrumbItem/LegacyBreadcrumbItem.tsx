import React from 'react';
import { styled } from 'styled-components';
import { color, lineHeight, padding, typography } from 'styled-system';

interface LegacyBreadcrumbItemProps {
  href?: string;
  label: string;
}

const LegacyBreadcrumbLinkItem = styled.a`
  ${({ theme }) => color({ theme, color: 'text.secondary' })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })}
  text-decoration: none;

  &:hover {
    ${({ theme }) => color({ theme, color: 'text.highlight' })}
  }
`;
const LegacyBreadcrumbCurrentTab = styled.span`
  ${({ theme }) => color({ theme, color: 'text.secondary' })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })}
  text-decoration: none;
`;

const LegacyBreadcrumbLink = styled.li`
  position: relative;
  ${({ theme }) => padding({ theme, pl: '10px', pr: '10px' })}
  ${({ theme }) => lineHeight({ theme, lineHeight: 3 })}
  margin-right: -2px;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 50%;
    transform: rotate(270deg);
    left: 0;
    margin-bottom: -5px;
    width: 8px;
    height: 8px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 7' id='s-angle-down' xmlns='http://www.w3.org/2000/svg' fill='%239b9b9b'%3E%3Cpath d='M6.677 7.03l-.177.177-.354-.353-5-5L.793 1.5 1.5.793l.354.353L6.5 5.793l.896-.897 1.25-1.25.399-.398 2.101-2.102.354-.353.707.707-.353.354-.4.398-4.6 4.602-.177.176z'%3E%3C/path%3E%3C/svg%3E");
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

const LegacyBreadcrumbItem = ({ href, label }: LegacyBreadcrumbItemProps) => {
  return (
    <LegacyBreadcrumbLink>
      {href ? (
        <LegacyBreadcrumbLinkItem href={href} title={label}>
          {label}
        </LegacyBreadcrumbLinkItem>
      ) : (
        <LegacyBreadcrumbCurrentTab>{label}</LegacyBreadcrumbCurrentTab>
      )}
    </LegacyBreadcrumbLink>
  );
};

export default LegacyBreadcrumbItem;
