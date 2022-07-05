# @t3n/components

To use this package, please install the following packages in your existing React App project:

`npm install @t3n/components @t3n/theme`

After that you can use the exported components of the packages.

First you need to wrap your App with the `ThemeProvider`-Component that is exported by `styled-components` and supply the `@t3n/theme` as a prop.

Your app component could look similar to this:

```js
import { ThemeProvider } from 'styled-components';
import { theme } from '@t3n/theme';

const App = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default App;
```

Now you can use all components provided by `@t3n/components` and shown in [`@t3n/storybook`](https://storybook.t3n.de/) inside your App.

Furthermore you are able to use our Design System for styling components. That could look like this:

```js
import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';
import { Card } from '@t3n/components';

const BackgroundCard = styled(Card)`
  ${({ theme }) => color({ theme, bg: 'background.secondary' })};
  ${({ theme }) => space({ theme, p: 3 })};
`;
```
