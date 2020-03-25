import { stripUnit } from 'polished';
import { theme } from '@t3n/theme';

const xs = {
  name: 'Extra Small',
  styles: {
    width: `${stripUnit(theme.breakpoints[0]) * 16}px`,
    height: '100vh',
  },
  type: 'mobile',
};

const sm = {
  name: 'Small',
  styles: {
    width: `${stripUnit(theme.breakpoints[1]) * 16}px`,
    height: '100vh',
  },
  type: 'tablet',
};

const md = {
  name: 'Medium',
  styles: {
    width: `${stripUnit(theme.breakpoints[2]) * 16}px`,
    height: '100vh',
  },
  type: 'desktop',
};

const lg = {
  name: 'Large',
  styles: {
    width: `${stripUnit(theme.breakpoints[3]) * 16}px`,
    height: '100vh',
  },
  type: 'desktop',
};

const viewports = {
  xs,
  sm,
  md,
  lg,
};

export default viewports;
