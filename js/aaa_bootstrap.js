var app = angular.module('viewCustom', [
    'angularLoad',
    'bc-header',
    'bc-noresults',
    'bc-proxy',
    'bc-permalink',
    'bc-search-collections',
    'bc-gallery-item',
]);

window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/431",
    apiKey: "XXXX",
};

browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
document.head.appendChild(browzine.script);

