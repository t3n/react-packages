<img src='./logo.svg' width='180' alt='t3n Logo'>

# t3n/react-packages

## Table of Contents

- [t3n/react-packages](#t3nreact-packages)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Development](#development)
    - [Tests](#tests)
  - [Documentation](#documentation)
    - [Peculiarities](#peculiarities)
    - [Resources](#resources)
  - [Deployment](#deployment)

## Introduction

This monorepo hosts packages necessary for development and documentation of react components in the t3n domain.

:warning:

```
 This repo is still in an early state and may change in it's structure
```

The monorepo is structured into four packages:

- @t3n/theme
- @t3n/components
- @t3n/storybook
- @t3n/icons
- @t3n/configs

## Setup

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things and their versions you need to use the software and how to install them.

```sh

npm install npm@latest -g

```

### Installation

1. Clone the repo

```sh
git clone git@github.com:t3n/react-packages.git
```

2. Install NPM packages

```sh
npm install
```

3. Build packages

```sh
npm run build
```

**Run this command from the main package**. This will run the build script of each package in the correct order, as **@t3n/storybook** depends on **@t3n/components**, which itself depends on **@t3n/theme** and **@t3n/icons**.

## Development

How to run and develop in this project.

```sh
npm run start:storybook
```

This will start storybook and handle local bundling of packages in the monorepo to enable the quickest development workflow possible. You will then be able to develop components in storybook.

:warning:

Before committing changes, you should **ALWAYS** run `npm run build` to generate all types correctly.

### Tests

How to run tests.

```sh
npm run test
```

## Documentation

### Peculiarities

The processes take quite long at the moment. This is a known issue and we will swtich to another incremental bundler and build system soon.

### Resources

To check out all our components you may have a look at https://storybook.t3n.de wich hosts the latest version of this package.
If you would rather try our components you can fork our [CodeSandbox template](https://codesandbox.io/s/t3n-react-components-fbvgb)

## Deployment

When your pull request is accepted and merged, go to
https://app.circleci.com/pipelines/github/t3n/react-packages
and decide whether you want to publish as minor or as patch. If you judge your changes to be a major release, please consult the team first.
