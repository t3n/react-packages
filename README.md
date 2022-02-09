<img src='./logo.svg' width='180' alt='t3n Logo'>

# t3n/react-packages

This monorepo hosts packages necessary for development and documentation of react components in the t3n domain.

:warning:

```
 This repo is still in an early state and may change in it's structure
```

To check out all our components you may have a look at https://storybook.t3n.de wich hosts the latest version of this package.
If you would rather try our components you can fork our [CodeSandbox template](https://codesandbox.io/s/t3n-react-components-fbvgb)

## Packages

The monorepo is structured into four packages:

- @t3n/theme
- @t3n/components
- @t3n/storybook
- @t3n/icons
- @t3n/configs

## Development

First, install all dependencies by running `npm install`.

Before starting development the first time, you need to run `npm run build` from the main package. This will run the build script of each package in the correct order, as **@t3n/storybook** depends on **@t3n/components**, which itself depends on **@t3n/theme** and **@t3n/icons**.

To develop components in Storybook, run `npm run start:storybook`. This will start storybook and handle local bundling of packages in the monorepo to enable the quickest development workflow possible. This will however **NOT** create bundles for all packages, so before committing changes, you should **ALWAYS** run `npm run build` to build all packages and prepare for releasing.
