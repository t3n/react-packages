import * as React from 'react';
import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

import Box from '../Box';
import Section, { SectionVariants } from '../Section';

const LegacySection: React.FC<{
  variant?: SectionVariants;
  anchor?: string;
  narrow?: boolean;
  wide?: boolean;
  innerGap?: SpaceProps['py'];
  children?: ReactNode;
}> = ({ variant, anchor, narrow, wide, innerGap, children }) => {
  return (
    <Box
      mx="-20px"
      mt={anchor ? ['unset', 'unset', -4] : 'unset'}
      pt={anchor ? 4 : 'unset'}
      id={anchor}
    >
      <Section variant={variant} innerGap={innerGap || [2, 2, 4]}>
        <Box
          // eslint-disable-next-line no-nested-ternary
          px={narrow ? [0, 0, '14rem'] : wide ? 0 : [0, 0, 9]}
          mx={wide ? 0 : [0, 0, '20px']}
        >
          {children}
        </Box>
      </Section>
    </Box>
  );
};

export default LegacySection;
