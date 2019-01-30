const _ = require("lodash");
const settings = require("./settings");
// info format
/*
 * {
 *  totalTests: [] // total tests
 *  passedTests: [] // successful tests
 *  failedTests: [] // failed tests
 * }
 */
module.exports = function (info) {
  // Bail on a threshold.
  // By default, if we've run at least ${settings.minTestAttempts} tests
  // and at least ${settings.failureRatio} of them have failed, we bail out early.
  // This allows for useful data-gathering for debugging or trend
  // analysis if we don't want to just bail on the first failed test.

  const sumAttempts = (memo, test) => memo + test.attempts;
  const totalAttempts = _.reduce(info.passedTests, sumAttempts, 0)
    + _.reduce(info.failedTests, sumAttempts, 0);

  // Failed attempts are not just the sum of all failed attempts but also
  // of successful tests that eventually passed (i.e. total attempts - 1).
  const sumExtraAttempts = (memo, test) => memo + Math.max(test.attempts - 1, 0);
  const failedAttempts = _.reduce(info.failedTests, sumAttempts, 0)
    + _.reduce(info.passedTests, sumExtraAttempts, 0);

  // Fail to total work ratio.
  const ratio = failedAttempts / totalAttempts;

  if (totalAttempts > settings.MIN_TEST_ATTEMPTS) {
    if (ratio > settings.FAILURE_RATIO) {
      return true;
    }
  }
  return false;
};
