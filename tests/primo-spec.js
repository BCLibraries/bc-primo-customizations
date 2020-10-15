module.exports = {
  tags: ['production'],
  'Primo search returns expected results' : function(browser) {
    browser
      .url(browser.launchUrl + 'primo-explore/search?vid=bclib_new')
      .waitForElementVisible('primo-explore')
      .verify.titleContains('Boston College Libraries')
      .assert.visible('#searchBar')
      .setValue('#searchBar', 'otters')
      .assert.visible('.button-confirm')
      .click('.button-confirm')
      .assert.containsText('prm-brief-result .item-title', 'Otters')
      .end();
  }
};
