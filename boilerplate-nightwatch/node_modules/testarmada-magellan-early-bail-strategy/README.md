# Magellan-Early-Bail-Strategy

[![Build Status](https://travis-ci.org/TestArmada/magellan-early-bail-strategy.svg?branch=master)](https://travis-ci.org/TestArmada/magellan-early-bail-strategy)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/TestArmada/magellan-early-bail-strategy/branch/master/graph/badge.svg)](https://codecov.io/gh/TestArmada/magellan-early-bail-strategy)

Strategy for [Magellan](https://github.com/TestArmada/magellan) to stop a test suite if test failure ratio exceeds a threshold within a given period.

## Important Notes About Versions

Important: `testarmada-magellan-early-bail-strategy` is only supported by Magellan version `10.0.0` or higher.

## What does this executor do
 
 1. It works as a Magellan strategy to help Magellan make decision when to do what
 2. It tells Magellan when to stop a test suite
 3. It tells Magellan when to stop a test

## How To Use

Please follow the following steps:

 1. `npm install testarmada-magellan-early-bail-strategy --save`
 2. Add following line to your `magellan.json` (if there isn't a `magellan.json` please create one under your folder root):

 ```javascript
 "strategy_bail": "testarmada-magellan-early-bail-strategy"
 ```

 3. Or, instead of adding above line in `magellan.json`, add following argument in your command line

 ```bash
 --strategy_bail testarmada-magellan-early-bail-strategy
 ```
 4. `./node_modules/.bin/magellan --help` to see if you can see the following content printed out

 ```bash
  Strategy-specific (testarmada-magellan-early-bail-strategy)
   --early_bail_threshold=0.1           Ratio of tests that need to fail before we abandon the build
   --early_bail_min_attempts=10         Minimum number of tests that need to run before we apply the bail strategy
 ```

Congratulations, you're all set. 

## Example

To enable this strategy with default threshold
```console
$ ./node_modules/.bin/magellan --strategy_bail testarmada-magellan-early-bail-strategy --test xxx
```

To enable this strategy with customized threshold
```console
$ ./node_modules/.bin/magellan --strategy_bail testarmada-magellan-early-bail-strategy --early_bail_threshold 0.5 --early_bail_min_attempts 5 --test xxx
```
