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
    template: '<div class="product-logo product-logo-local" layout="row" id="banner" tabindex="0"  role="banner">' +
'<a href="https://library.bc.edu"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}" width="130" /></a></div><h1>Staging</h1>'
  });

    // Add Proxy Borrower Link
    app.component('prmMessagesAndBlocksOverviewAfter', {
        templateURL: `custom/bclib_new/html/proxy_borrower.html`

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

