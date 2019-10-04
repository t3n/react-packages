import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest';
import styled from 'styled-components';

import { darken } from 'polished';
import { ThemeProps, composeTextStyle } from '@t3n/theme';
import { space, WidthProps, layout } from 'styled-system';
import { MaterialClear, T3nLoupe } from '@t3n/icons';
import { Loader } from '../Loader';

const IconWrapper = styled.div`
  width: 25px;
  display: flex;
  align-items: center;
  ${({ theme }) => space({ theme, ml: 2 })}

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    width: 20px;
    height: 20px;
  }
`;

const InputWrapper = styled.div`
  flex-grow: 2;

  input {
    background-color: transparent;
    border: none;
    color: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    width: 100%;
    line-height: 40px;
    height: 40px;

    &::placeholder {
      color: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    }

    ${({ theme }) => composeTextStyle({ textStyle: 'regular', theme })};

    &:focus {
      border-color: #2a2a2a;
      outline: 0;
    }
  }
`;

const Wrapper = styled.div<WidthProps & ThemeProps>`
  background-color: ${({ theme }: ThemeProps) =>
    darken(0.17, theme.colors.brand.red)};

  border-radius: ${({ theme }: ThemeProps) => `${theme.border.radii[1]}`};
  display: flex;
  max-width: 500px;
  height: 40px;

  ${({ theme }) => space({ theme, px: 2 })}
  ${layout}
`;

export interface SearchBoxProps {
  placeholder: string;
  isLoading: boolean;
}

const SearchBox: React.FC<SearchBoxProps & WidthProps> = ({
  width,
  placeholder,
  isLoading
}) => {
  const [term, setTerm] = useState('');

  const handleOnChange = (e: React.FormEvent<any>) => {
    setTerm(e.currentTarget.value);
  };

  return (
    <Wrapper width={width}>
      <InputWrapper>
        <AutoSuggest
          getSuggestionValue={() => 'test'}
          suggestions={[]}
          onSuggestionsFetchRequested={() => {}}
          onSuggestionsClearRequested={() => {}}
          renderSuggestion={() => <div>suggestion</div>}
          inputProps={{
            value: term,
            onChange: handleOnChange,
            placeholder
          }}
        />
      </InputWrapper>
      <IconWrapper>
        {isLoading ? (
          <Loader small />
        ) : (
          <>
            {term.length === 0 ? (
              <T3nLoupe />
            ) : (
              <MaterialClear onClick={() => setTerm('')} />
            )}
          </>
        )}
      </IconWrapper>
    </Wrapper>
  );
};

SearchBox.defaultProps = {
  isLoading: true,
  placeholder: 'Suche nach Pionieren'
};

export { SearchBox };
