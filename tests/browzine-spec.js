describe('Browzine Fulltext', function() {
  var EC = protractor.ExpectedConditions;
  var Url = 'https://bc-primo.hosted.exlibrisgroup.com/permalink/f/1ej54k1/TN_cdi_pubmedcentral_primary_oai_pubmedcentral_nih_gov_4935067';

  it('should show a browzine link', function() {
    browser.get(Url);

    var result = $('prm-search-result-availability-line .browzine .browzine-direct-to-pdf-link');
    expect(result.getText()).toEqual("Download PDF");
  });
});
