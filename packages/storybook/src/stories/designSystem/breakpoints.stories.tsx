import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeConsumer } from 'styled-components';

import Breakpoint from '../../components/Breakpoint';

const meta: Meta = {
  title: 'Design System/Breakpoints',
  parameters: { docs: { page: null } },
};

export default meta;

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
