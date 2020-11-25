import React from 'react';
import { ThemeConsumer } from 'styled-components';

import Breakpoint from '../../../components/Breakpoint';

export default {
  title: 'Design System/Breakpoints',
  parameters: { docs: { page: null } },
};

export const allBreakpoints = () => (
  <ThemeConsumer>
    {(theme) =>
      [...theme.breakpoints].reverse().map((bp) => (
        <Breakpoint key={bp} width={bp}>
          {bp} / {parseInt(bp as string, 10) * 16}px
        </Breakpoint>
      ))
    }
  </ThemeConsumer>
);

allBreakpoints.story = { name: 'Alle Breakpoints' };
