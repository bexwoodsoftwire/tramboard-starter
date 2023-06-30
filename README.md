# Tramboard - Mobile App Starter

## Overview

This Tramboard App starter is a [React Native/Expo](https://expo.dev/) cross-platform mobile app which serves to support the Softwire React Native Tramboard training exercise.

## Developer Setup

### Prerequisites

- Node.js v16 and NPM
- Your IDE of choice (Intellij IDEA is recommended)

### Setup

1. Install the Expo CLI globally with `npm install -g expo-cli`.
2. Install the project dependencies with `npm install`.

### Running on a Device

1. Install the Expo Go app on your phone from the Play Store/App Store.
2. Run the code!
   - Run in development mode with hot reloading with `npm start`
   - If you have changed environment variables or otherwise want to clear the Expo cache, run `npm start -- --clean`
   - To view the app on your own device, simply scan the QR code in the command line with the Expo Go app
     - Make sure you're on the same Wi-Fi network
   - Once loaded, making code changes to the code (remember to save your changes!) should hot-reload in the app

### Running on a Simulator

#### Android

- Download [Android Studio](https://developer.android.com/studio)
- Install with the recommended settings
- Start up a simulator by selecting "Configure" and "AVD"
- Connect to the simulator using `npm run android`

#### iOS

> ⚠️ The iOS Simulator is only available on macOS. If you wish to test on iOS w/ a Windows machine,
> follow the above instructions to run on a physical iOS device.

Similar steps to Android can be used to run on iOS with `npm run ios`.

## Linting

The code is linted using [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for additional opinionated formatting of code style. You can check for linting issues with:

```shell
npm run lint
```

To fix all auto-fixable linting issues, run:

```shell
npm run lint:fix
```

Files do not autofix formatting on save or with git hooks. This is because I think it's useful to see what stylistic issues the linter has with your code rather than them just magically being fixed. This is for two reasons:

- It's a good way to learn.
- It means that any suboptimal linting rules are more likely to be noticed and challenged.

If anyone's interested to know about how you'd set up linting to fix itself on file save and/or commit, let me know!
