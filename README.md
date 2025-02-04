# Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Tests](#tests)
- [Documentation](#documentation)
  - [Resources](#resources)
- [Deployment](#deployment)

## Introduction

This monorepo hosts packages necessary for development and documentation of react components in the t3n domain.

The monorepo is structured into four packages:

- @t3n/theme
- @t3n/components
- @t3n/storybook
- @t3n/icons
- @t3n/configs

## Setup

### Prerequisites

```sh

npm install npm@latest -g

```

### Installation

#### Clone repo

```sh
git clone git@github.com:t3n/react-packages.git
```

#### Install NPM packages

```sh
npm install
```

#### Build packages

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

```sh
npm run test
```

## Documentation

### Resources

To check out all our components you may have a look at [https://storybook.t3n.de](https://storybook.t3n.de) which hosts the latest version of this package.
If you would rather try our components you can fork our [CodeSandbox template](https://codesandbox.io/s/t3n-react-components-fbvgb)

## Deployment

When your pull request is accepted and merged, go to [https://app.circleci.com/pipelines/github/t3n/react-packages](https://app.circleci.com/pipelines/github/t3n/react-packages) and decide whether you want to publish as minor or as patch. If you judge your changes to be a major release, please consult the team first.
