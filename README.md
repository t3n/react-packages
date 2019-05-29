[![CircleCI](https://circleci.com/gh/t3n/react-packages.svg?style=svg&circle-token=5b76fc109fe1caf940564b1a692600c7d4a72a3e)](https://circleci.com/gh/t3n/react-packages)

# t3n/react-packages

This monorepo hosts packages necessary for development and documentation of react components in the t3n domain.

## Packages

The monorepo is structured into 3 packages:

- @t3n/theme: 
- @t3n/components: 
- @t3n/storybook: 

## Development

First, install all dependencies by running `npm install`.

Before starting development the first time, you need to run `npm run build` from the main package. This will run the build script of each package in the correct order, as **t3n-storybook** depends on **t3n-components**, which itself depends on **t3n-theme**. 

After, you can run `npm run start` to start storybook and watch file changes in all packages.
