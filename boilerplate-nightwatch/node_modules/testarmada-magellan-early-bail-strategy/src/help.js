// help follows the general Magellan help guideline
module.exports = {
  "early_bail_threshold": {
    "visible": true,
    "type": "string",
    "example": "0.1",
    "description": "Ratio of tests that need to fail before we abandon the build"
  },
  "early_bail_min_attempts": {
    "visible": true,
    "type": "string",
    "example": "10",
    "description": "Minimum number of tests that need to run before we apply the bail strategy"
  }
};
