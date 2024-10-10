/* Update these values before building the package */
var GTM_ID = 'GTM-xxxxxxx'; /* GA/GTM Container ID for environment */
var API_KEY = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; /* LibKey/Browzine API key */

var app = angular.module('viewCustom', [
    'angularLoad',
    'bc-header',
    'bc-noresults',
    'bc-proxy',
    'bc-permalink',
    'bc-search-collections',
    'bc-ghost-record',
    'bc-gallery-item',
    'bc-availability',
    'bc-links-filter',
    'hathiTrustAvailability'
]);

window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/431",
    apiKey: API_KEY
};

browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
document.head.appendChild(browzine.script);

/* Google Tag Manager */
const gtmId = GTM_ID
function addGTM(doc) {
 const newScript = doc.createElement('script')
 const scriptText = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
 newScript.innerHTML = scriptText
 doc.head.append(newScript)
  
 const noscript = doc.createElement('noscript')
 const noscriptText = `&lt;iframe src="//www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;`
 noscript.innerHTML = noscriptText
 doc.body.insertBefore(noscript, doc.body.firstChild)
}
addGTM(document)
