import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { storiesOf } from '@storybook/react';
import Breakpoint from '../../../components/Breakpoint';

storiesOf('Layout|Breakpoints', module).add('Alle Breakpoints', () => (
  <ThemeConsumer>
    {theme =>
      [...theme.breakpoints].reverse().map(bp => (
        <Breakpoint key={bp} width={bp}>
          {bp}
        </Breakpoint>
      ))
    }
  </ThemeConsumer>
));
