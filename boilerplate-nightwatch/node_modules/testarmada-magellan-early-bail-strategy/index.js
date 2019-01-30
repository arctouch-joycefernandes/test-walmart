"use strict";

const help = require("./src/help");
const settings = require("./src/settings");
const decide = require("./src/strategy");

const logger = require("testarmada-logger");

module.exports = {
  name: "testarmada-magellan-early-bail-strategy",
  description: "Magellan will bail if failure ratio exceeds a threshold within a given period",
  bailReason: () => `At least ${settings.FAILURE_RATIO * 100}% of tests have `
    + `been failed after seeing at least ${settings.MIN_TEST_ATTEMPTS} tests run`,

  help,

  setConfiguration(argv) {
    logger.prefix = "Early Bail Strategy";

    if (argv.early_bail_threshold) {
      settings.FAILURE_RATIO = argv.early_bail_threshold;
    }

    if (argv.early_bail_min_attempts) {
      settings.MIN_TEST_ATTEMPTS = argv.early_bail_min_attempts;
    }

    logger.debug(`bail config: ${JSON.stringify(settings)}`);
  },

  decide
}