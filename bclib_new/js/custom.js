(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

  // Add Clickable Logo
  app.controller('prmLogoAfterController', [function () {
    var vm = this;
    vm.getIconLink = getIconLink;
    function getIconLink() {
      return vm.parentCtrl.iconLink;
    }
  }]);

  app.component('prmLogoAfter',{
    bindings: {parentCtrl: '<'},
    controller: 'prmLogoAfterController',
    templateUrl: 'custom/bclib_new/html/logo.html'
  });

    // Add Proxy Borrower Link
    app.component('prmMessagesAndBlocksOverviewAfter', {
        templateUrl: `custom/bclib_new/html/proxy_borrower.html`

    });


    // Add Search Links

    app.controller('prmSearchBarAfterController', [function() {
	var vm = this;
	vm.getQueryString = getQueryString;
	function getQueryString() {
	    return vm.parentCtrl.typedQuery;
	}
    }]);

    app.component('prmSearchBarAfter', {
	bindings: {parentCtrl: '<'},
	controller: 'prmSearchBarAfterController',
	templateUrl: `custom/bclib_new/html/search_links.html`
    });

})();

