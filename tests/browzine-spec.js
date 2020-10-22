module.exports = {
  tags: ['production'],
  'Browzine link is displayed' : function(browser) {
    browser
   .url(browser.launchUrl + 'primo-explore/fulldisplay?docid=TN_cdi_crossref_primary_10_1016_j_jacc_2020_04_008&vid=bclib_new&search_scope=pci&tab=pci_only&lang=en_US&context=PC')
      .waitForElementVisible('primo-explore')
      .assert.containsText('prm-search-result-availability-line .browzine .browzine-direct-to-pdf-link', 'Download PDF')
      .end();
  }
};
