import 'jest-styled-components';
import React from 'react';
import { RenderOptions } from '@testing-library/react';
import { Theme } from '@t3n/theme';
interface OptionalTheme {
    theme?: Theme;
}
export declare const renderWithTheme: (ui: React.ReactElement<any>, { theme, ...options }: RenderOptions & OptionalTheme) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export {};
