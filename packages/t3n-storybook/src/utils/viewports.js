import { stripUnit } from 'polished';
import { theme } from '@t3n/styles';

const xs = {
  name: 'Extra Small',
  styles: {
    width: stripUnit(theme.breakpoints[0]) - 1 + 'rem',
    height: '100%'
  },
  type: 'mobile'
};

const sm = {
  name: 'Small',
  styles: {
    width: stripUnit(theme.breakpoints[1]) - 1 + 'rem',
    height: '100%'
  },
  type: 'tablet'
};

const md = {
  name: 'Medium',
  styles: {
    width: stripUnit(theme.breakpoints[2]) - 1 + 'rem',
    height: '100%'
  },
  type: 'desktop'
};

const lg = {
  name: 'Large',
  styles: {
    width: stripUnit(theme.breakpoints[3]) - 1 + 'rem',
    height: '100%'
  },
  type: 'desktop'
};

const viewports = {
  xs,
  sm,
  md,
  lg
};

export default viewports;
