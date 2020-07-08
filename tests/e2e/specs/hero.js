// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "test for elements on Hero and steps in description": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".hero-body")
      .assert.elementPresent(".hero-image")
      .assert.elementPresent("#about-steps")
      .click("#about-steps")
      .assert.elementPresent("#steps")
      .end();
  },

  "test for table scroll to behavior": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("#scrollto-table")
      .click("#scrollto-table")
      .assert.visible("#Table")
      .end();
  },

  "test for let us know url": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("#issues-link")
      .click("#issues-link")
      .assert.urlContains("https://github.com/")
      .end();
  },

  "test for register your task link": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("#about-steps-button")
      .click("#about-steps-button")
      .assert.elementPresent("#steps")
      .end();
  }
};
