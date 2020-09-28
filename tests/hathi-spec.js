describe('HathiTrust Availability', function() {
  var searchBar = element(by.id('searchBar'));
  var EC = protractor.ExpectedConditions;

  it('should show a hathi link', function() {
    browser.get(browser.baseUrl);

    searchBar.sendKeys("early jesuit missions", protractor.Key.ENTER);

    var result = element.all(by.tagName('prm-brief-result-container')).first().$('hathi-trust-availability');
    browser.wait(EC.visibilityOf(result), 1000);
    expect(result.getText()).toEqual("Full Text Available at HathiTrust");
  });
});
