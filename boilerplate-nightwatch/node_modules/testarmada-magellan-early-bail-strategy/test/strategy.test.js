"use strict";

const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");
const _ = require("lodash");

const decide = require("../src/strategy");
const settings = require("../src/settings");

chai.use(chaiAsPromise);

const expect = chai.expect;
const assert = chai.assert;

const totalTests = [
  { test: "1", attempts: 1 },
  { test: "2", attempts: 1 },
  { test: "3", attempts: 1 }];

const passedTests = [
  { test: "1", attempts: 1 }];

const failedTests = [
  { test: "2", attempts: 1 }];

describe("Strategy", () => {
  let info;

  beforeEach(() => {
    info = {
      totalTests: _.cloneDeep(totalTests),
      passedTests: _.cloneDeep(passedTests),
      failedTests: _.cloneDeep(failedTests)
    };

    settings.FAILURE_RATIO = 0.1;
    settings.MIN_TEST_ATTEMPTS = 10;
  });

  it("min test attempts isn't triggered", () => {
    expect(decide(info)).to.equal(false);
  });

  it("failure rate isn't triggered", () => {
    settings.MIN_TEST_ATTEMPTS = 1;
    settings.FAILURE_RATIO = 0.9;
    expect(decide(info)).to.equal(false);
  });

  it("failure rate isn triggered", () => {
    settings.MIN_TEST_ATTEMPTS = 1;
    settings.FAILURE_RATIO = 0.3;
    expect(decide(info)).to.equal(true);
  });

});