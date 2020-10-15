module.exports = {
  tags: ['production'],
  'Hathitrust link is displayed' : function(browser) {
    browser
      .url(browser.launchUrl + 'primo-explore/search?vid=bclib_new')
      .waitForElementVisible('primo-explore')
      .setValue('#searchBar', 'early jesuit missions')
      .assert.visible('.button-confirm')
      .click('.button-confirm')
      .verify.containsText('prm-brief-result .item-title', 'Early Jesuit missions')
      .assert.containsText('prm-brief-result-container hathi-trust-availability .umnHathiTrustLink a', "Full Text Available at HathiTrust")
      .end();
  }
};
