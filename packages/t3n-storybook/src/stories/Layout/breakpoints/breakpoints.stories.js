import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { color, space } from 'styled-system';
import { storiesOf } from '@storybook/react';

const Breakpoint = styled.div`
  height: 2rem;
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  ${color};
  ${space};
`;

Breakpoint.defaultProps = {
  bg: 'brand.greyLight',
  mb: 1
};

storiesOf('Layout|Breakpoints', module).add('Alle Breakpoints', () => (
  <ThemeConsumer>
    {theme =>
      theme.breakpoints.reverse().map(bp => (
        <div>
          <Breakpoint width={bp}>{bp}</Breakpoint>
        </div>
      ))
    }
  </ThemeConsumer>
));
