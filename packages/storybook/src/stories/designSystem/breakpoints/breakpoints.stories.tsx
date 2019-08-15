import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { stripUnit } from 'polished';

import Breakpoint from '../../../components/Breakpoint';

storiesOf('Design System|Breakpoints', module).add(
  'Alle Breakpoints',
  () => (
    <ThemeConsumer>
      {theme =>
        [...theme.breakpoints].reverse().map(bp => (
          <Breakpoint key={bp} width={bp}>
            {bp} / {stripUnit(bp) * 16}px
          </Breakpoint>
        ))
      }
    </ThemeConsumer>
  ),
  {
    options: {
      showPanel: false
    }
  }
);
