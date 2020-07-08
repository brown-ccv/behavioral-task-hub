// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "test for table sidebar collapsed toggle": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".control-sidebar")
      .assert.elementPresent(".table-controls")
      .assert.elementPresent(".collapsed")
      .assert.elementPresent(".sidebar-control")
      .assert.elementPresent(".sidebar-control-inner")
      .assert.elementPresent(".control-button")
      .click(".control-button")
      .assert.not.elementPresent(".collapsed")
      .end();
  }
};
