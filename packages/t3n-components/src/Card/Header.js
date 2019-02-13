import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import { Ratio } from '../Ratio';

const propTypes = {
  is: PropTypes.oneOf(['div', 'a']),
  big: PropTypes.bool,
  ratio: Ratio.propTypes.ratio,
  bg: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  ...color.propTypes
};

const defaultProps = {
  is: 'div',
  big: false,
  ratio: 'auto',
  color: 'brand.white',
  bg: 'brand.anthracite',
  image: '',
  children: null
};

export const CardHeaderContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled(tag)``;

const CardHeader = ({ big, ratio, bg, image, children, ...props }) => (
  <CardHeaderContainer {...props}>
    <Ratio ratio={ratio}>
      {image && <img src={image} />}
      <CardHeaderContent>{children}</CardHeaderContent>
    </Ratio>
  </CardHeaderContainer>
);

CardHeader.propTypes = { ...propTypes };
CardHeader.defaultProps = { ...defaultProps };

const padding = ({ big, theme }) =>
  big ? space({ p: [3, 6], theme }) : space({ 3: 4, theme });

const backgroundColor = ({ bg, theme }) => color({ bg, theme });

const StyledCardHeader = styled(CardHeader)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  ${color}
  ${backgroundColor}

  > ${Ratio} {
    width: 100%;
    display: flex;
    align-items: stretch;

    > img:first-child {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    > ${CardHeaderContent} {
      ${padding}
    }
  }
`;

StyledCardHeader.displayName = 'CardHeader';
StyledCardHeader.propTypes = { ...propTypes };
StyledCardHeader.defaultProps = { ...defaultProps };

export default StyledCardHeader;
