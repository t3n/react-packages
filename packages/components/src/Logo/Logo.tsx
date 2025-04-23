import React from 'react';
import styled from 'styled-components';

import { T3nLogo } from '@t3n/icons';

const Logo = styled(({ ...props }) => {
  return <T3nLogo width="3rem" height="1rem" {...props} />;
})<React.SVGAttributes<SVGElement>>``;

export default Logo;
