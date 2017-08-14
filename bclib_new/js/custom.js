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
'<a href="https://library.bc.edu"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}" width=130 /></a></div>'
  });

    // Add Proxy Borrower Link
    app.component('prmMessagesAndBlocksOverviewAfter', {
        template: `<div class="tiles-grid-tile"><div class="tile-content layout-column" layout="column"><div class="tile-header layout-column" layout="column"><div layout="row" layout-align="space-between" class="layout-align-space-between-stretch layout-row"><h2 class="header-link light-text" tabindex="0" role="button"><a href="http://arc.bc.edu/form/proxy-request">Add Proxy Borrower</a><prm-icon class="arrow-icon" icon-type="svg" svg-icon-set="primo-ui" icon-definition="link"><md-icon md-svg-icon="primo-ui:chevron-right" aria-label="icon-chevron-right" class="md-primoExplore-theme" role="img"></md-icon></h2></div></div><md-list layout="column" role="list" class="md-primoExplore-theme layout-column"><!----><!----></md-list><!----><div layout="column" layout-align="center center" layout-padding="" layout-margin="" class="layout-margin layout-padding layout-align-center-center layout-column"><prm-icon class="giant-icon bg-icon" icon-type="svg" svg-icon-set="primo-ui" icon-definition="plus"><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon><div><span >Faculty &amp; Staff Only</span></div></div><!----><!----></div></div>`

    });

})();

